const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib');
const passwordCheck = require('./../libs/passwordlib')
const token=require('./../libs/token')
const nodemailer = require('nodemailer');
const groupModel = mongoose.model('groupSchema');
/* Models */
const UserModel = mongoose.model('User')
const AuthModel=mongoose.model('Auth');
const group = mongoose.model('group');
const grpchat=mongoose.model('grpchat')
// start user signup function 

let signUpFunction = (req, res) => {

    let validateinput =()=>{
        return new Promise((resolve,reject)=>{
            if(req.body.email){
                if(!validateInput.Email(req.body.email)){
                 logger.error('not a valid email','error occured at validateinput method',6);
                 let apiResponse = response.generate(`Error occured:${err}`,'entered email is not in the format prefered',400,null);
                 reject(apiResponse)   
                }else if(check.isEmpty(req.body.password)){
                    logger.error('password is empty','error at validateinput:password',0);
                    let apiResponse = response.generate(`Error occured:${err}`,'password is empty',400,null);
                    reject(apiResponse)   
                }else{
                    resolve(req)
                }

                }
            else{
                logger.error(err,'email not found',0);
                let apiResponse = response.generate(`Error occured:${err}`,'enter email',400,null);
                reject(apiResponse)
            }
        })
    }//end of validateinput
      let createUser = ()=>{
        return new Promise((resolve,reject)=>{
            UserModel.findOne({'email':req.body.email},(err,userDetails)=>{
               if(err){
                logger.error(err,'error at createUser:password',0);
                let apiResponse = response.generate(`Error occured:${err}`,'',400,null);
                reject(apiResponse)   
               }else if(check.isEmpty(userDetails)){
                   let user = new UserModel({
                       userId:shortid.generate(),
                       firstName:req.body.firstName,
                       lastName:req.body.lastName,
                       password:passwordCheck.hashpassword(req.body.password),
                       email:req.body.email,
                       mobileNumber:req.body.mobileNumber,
                       created:time.now()
                   })
                  user.save((err,result)=>{
                      if(err){
                        logger.error(err,'failed to create user',0);
                        let apiResponse = response.generate(`Error occured:${err}`,'failed to create user',400,null);
                        reject(apiResponse)   
                      }else{
                        logger.error(err,'user created',0);
                        newobt = user.toObject();
                        resolve(newobt);
                        
                      }
                  }) 
               }else{
                   logger.error('email is already registered','validate email',4);
                   let apiResponse =response.generate(true,"email is already exist",400,null);
                   res.send(apiResponse);
               }
            })
        })
      }//end of creater user
    
    

    validateinput(req,res)
    .then(createUser)
    .then((resolve)=>{
      delete resolve.password;
      
           let apiResponse = response.generate(false,'user created',400,resolve);
           res.send(apiResponse)
             
    })
   .catch((err)=>{
       console.log(err); 
       res.send(err);
   })
 

}// end user signup function 

// start of login function 
let loginFunction = (req, res) => {

    validateEmail = () =>{
        return new Promise((resolve,reject)=>{
            if(req.body.email){
                UserModel.findOne({'email':req.body.email}).exec((err,userDetails)=>{
                    if(err){
                     logger.error(err,'some error occured',0);
                     let apiResponse = response.generate(`Error occured:${err}`,'error occured',400,null);
                     reject(apiResponse)   
                    }else if(check.isEmpty(userDetails)){
                     logger.error(err,'email is not registered',0);
                     let apiResponse = response.generate(`Error occured:${err}`,'Email not registered to login',400,null);
                     reject(apiResponse)   
                    }
                     else{
                         resolve(userDetails);
                     }
     
                })//end of find
     
             }//if ends
             else{
                 logger.error(err,'no mail',0);
                  let apiResponse = response.generate(`Error occured:${err}`,'enter email',400,null);
                  reject(apiResponse)   
                }

        })
        
        
    }//validateEmail ends here
      

     validatePassword = (retrievedUserDetails)=>
     {
        return new Promise((resolve,reject)=>{
            if(req.body.password){
            passwordCheck.comparePassword(req.body.password,retrievedUserDetails.password,(err,isMatch)=>{
              if(err){
                logger.error(err,'password is incorrect',0);
                let apiResponse = response.generate(`Error occured:${err}`,'password is incorrect',400,null);
                reject(apiResponse) 
              }else if(isMatch){
                    
                    let retrievedUserDetailsObj = retrievedUserDetails.toObject()
                    delete retrievedUserDetailsObj.password
                    delete retrievedUserDetailsObj._id
                    delete retrievedUserDetailsObj.__v
                    delete retrievedUserDetailsObj.createdOn
                    delete retrievedUserDetailsObj.modifiedOn
                    resolve(retrievedUserDetailsObj)
              }
            })
        }
        else{
            logger.error(err,'password not found',0);
            let apiResponse = response.generate(`Error occured:${err}`,'password not found',400,null);
             reject(apiResponse)   
        }
        })
        
    
    }//validate password
     let gen = (userDetails)=>{ 
         return new Promise((resolve,reject)=>{
            token.generateToken(userDetails,(err,tokendetails)=>{
                if(err){
                  logger.error(err,'jwt token is not generated',0);
                  let apiResponse = response.generate(`Error occured:${err}`,'error in token generation',400,null);
                   reject(apiResponse)
                }else{
                    tokendetails.id = userDetails.userId;
                    tokendetails.userdetails=userDetails;
                    resolve(tokendetails);
                }
            })
         })
     }
     let savetoken = (retreivedtoken)=>{
        
             AuthModel.findOne({'userId':retreivedtoken.id},(err,userDetail)=>{
                 if(err){
                    logger.error(err,'some occured at svaetoke,findone',0);
                    let apiResponse = response.generate(`Error occured:${err}`,'error in save token',400,null);
                     reject(apiResponse)
                 }
                   else if(check.isEmpty(userDetail))
                   {
                    let newAuth = new AuthModel({
                    userId: retreivedtoken.userId,
                    authToken: retrieved.token,
                    tokenSecret: retrieved.tokenSecret,
                    tokenGenerationTime: time.now()
                     })
                       newAuth.save((err,result)=>
                       {
                        if(err)
                        {
                         console.log(err)
                        logger.error(err.message, 'userController: saveToken', 10)
                        let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                        reject(apiResponse)
                       }else{
                        let responseBody = {
                            authToken: userDetail.authToken,
                            userDetails: retreivedtoken.userDetails
                        }
                        resolve(responseBody)
                       }
                   })
                 }else{
                    userDetail.authToken = tokenDetails.token
                    
                    userDetail.tokenGenerationTime = time.now()
                     userDetail.save((err, newTokenDetails) => {
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'userController: saveToken', 10)
                            let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                            reject(apiResponse)
                        } else {
                            let responseBody = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                  
                            resolve(responseBody)
                        }
                 
             })

            }
        }) 
            
    
    
} 
    

   
    validateEmail(req,res)
    .then(validatePassword)
    .then(gen)
    .then((resolve)=>{
       
       let apiResponse = response.generate(false,'login successfull',400,resolve);
       res.send(apiResponse) 
    })
   .catch((err)=>{
       console.log(err);
       res.send(err);
   })

    
  }//login function ends here


// end of the login function 
  
  let find = (req,res)=>{
      UserModel.find({"email":req.body.email},(err,result)=>{
          if(err){
              res.send(err);
          }else if(check.isEmpty(result)){
              res.send('email not found');
          }else{
              res.send(result);
          }
      })
  }
 
  let deleteAccount = (req,res)=>{
   let findaccount = ()=>{
       return new Promise((resolve,reject)=>{
           console.log(req.body.id);
           UserModel.findOne({"userId":req.body.id,"email":req.body.email},(err,result)=>{
               if(err){
                   logger.error(err,"some error occured",3);
                   reject("some error occured");
               }else if(check.isEmpty(result)){
                   console.log(result);
                logger.error(err,"sorry email not registered",3);
                reject("email not registered");
               }else{
                   resolve(result)
               }
           })
       })
   }

   let deleteAccount=()=>{
       return new Promise((resolve,reject)=>{
           UserModel.deleteOne({userId:req.body.id},(err,result)=>{
               if(err){
                   logger.error(err,"some error occured",3);
                   reject('cant delete account')
               }else{
                   resolve('account deleted');
               }
           })
       })
   }
    
   findaccount(req,res)
   .then(deleteAccount)
   .then((resolve)=>{
       let apiresponse=response.generate(null,"account deleted",200,resolve);
       res.send(apiresponse)
   })
   .catch((err)=>{
       res.send(err);
   })
    

}

let deleteGroupsOfUser = (req,res)=>{
    let findaccount = ()=>{
        return new Promise((resolve,reject)=>{
            console.log(req.body.id);
            group.find({"email":req.body.email},(err,result)=>{
                if(err){
                    logger.error(err,"some error occured",3);
                    reject("some error occured");
                }else if(check.isEmpty(result)){
                    console.log(result);
                 logger.error(err,"sorry email not registered",3);
                 reject("email not registered");
                }else{
                    resolve(result)
                }
            })
        })
    }
 
    let deleteAccount=()=>{
        return new Promise((resolve,reject)=>{
            group.deleteMany({"email":req.body.email},(err,result)=>{
                if(err){
                    logger.error(err,"some error occured",3);
                    reject('cant delete account')
                }else{
                    resolve('account deleted');
                }
            })
        })
    }
     
    findaccount(req,res)
    .then(deleteAccount)
    .then((resolve)=>{
        let apiresponse=response.generate(null,"account deleted",200,resolve);
        res.send(apiresponse)
    })
    .catch((err)=>{
        res.send(err);
    })
     
 
 }
 
 

let LeaveGroup = (req,res)=>{
    UserModel.remove({"email":req.body.email,'groupId':req.body.groupId},(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send(result);
        }
    })
}
  


  let findall = (req,res)=>{
    UserModel.find().select('-password,-created,-mobileNumber,-_id,-_v').exec((err,result)=>{
        if(err){
            res.send(err);
        }else if(check.isEmpty(result)){
            res.send('email not found');
        }else{
            res.send(result);
        }
    })
}


let forgotpassword = (req, res) => {
    let validatemail=()=>{
      return new Promise((resolve,reject)=>{
       if(req.body.email){
           const newId = shortid.generate()
           UserModel.findOneAndUpdate({'email':req.body.email},{'userId':newId},(err,result)=>{
               if(err){
                logger.error('not a valid email','error occured at validateinput method',6);
                let apiResponse = response.generate(`Error occured:${err}`,'entered email is not in the format prefered',400,null);
                reject(apiResponse)     
               }else if(check.isEmpty(result)){
                logger.error(err,'email is not registered',0);
                let apiResponse = response.generate(`Error occured:${err}`,'Email not registered to login',400,null);
                reject(apiResponse)   
               }else{
                      
                
                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: 'phanindrasai515@gmail.com', // generated ethereal user
                        pass: 'Phanindra515$$' // generated ethereal password
                    },
                    tls:{
                         rejectUnauthorized:false
                    }
                });

                let mailOptions = {
                    from: '"Chat-app" <phanindrasai515@gmail.com>', // sender address
                    to: req.body.email, // list of receivers
                    subject: 'reset password localhost:4200/reset', // Subject line
                    text: `http://localhost:4200/forgot/${newId}`, // plain text body
                    html:'' ,// html body
                };
                 // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            resolve(result);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
  
              
                   
            }//end of else 
           })
       }
      
      })
       //end of validate email
    }
    

   

    validatemail(req,res)
    .then((resolve)=>{
        let apiResponse=response.generate(false,'email sent successful',400,resolve);
        res.send(apiResponse)
    })
    .catch((err)=>{
        console.log(err);
        res.send(err);
    })
    
} // end of the forgot function.

   let PasswordChange = (req,res)=>{
        ValidateEmailToCheck = ()=>{
            return new Promise((resolve,reject)=>{
                if(req.body.email){
                    const pass=passwordCheck.hashpassword(req.body.password);
                    UserModel.update({'email':req.body.email},{$set:{'password':pass}},{new:true},(err,result)=>{
                        if(err){
                            logger.error('not a valid email','error occured at validateinput method',6);
                            let apiResponse = response.generate(`Error occured:${err}`,'entered email is not in the format prefered',400,null);
                            reject(apiResponse)     
                            
                           }else{
                               resolve(result);
                           }
                    })
                }
            })
        }
   ValidateEmailToCheck(req,res)
   .then((resolve)=>{
     let apiResponse = response.generate(`Error occured:${err}`,'Email not registered to login',200,resolve);
     res.send(apiResponse);
   })
   .catch((err)=>{
    res.send(err);
   })
   }

    let editGroupName = (req ,res)=>{
        group.update({'groupId':req.body.groupId},{'groupName':req.body.groupName},{multi:true},(err,result)=>{
            if(err){
                res.send(err);
            }else{
                let apiResponse= response.generate(null,'name changed successfylly',200,result);
                res.send(apiResponse);
            }
        })
    } 
    let leaveFromGroup = (req ,res)=>{
        group.deleteOne({'groupId':req.body.groupId,"email":req.body.email},(err,result)=>{
            if(err){
                res.send(err);
            }else{
                let apiResponse= response.generate(null,'you left from group successfully!',200,result);
                res.send(apiResponse);
            }
        })
    } 
    let deletetotalGroup = (req ,res)=>{
        group.deleteMany({'groupId':req.body.groupId},(err,result)=>{
            if(err){
                res.send(err);
            }else{
                let apiResponse= response.generate(null,' group deleted successfully!',200,result);
                res.send(apiResponse);
            }
        })
    } 

   let CreateGroup = (req,res)=>{
      
         let newUser = new group({
             groupName:req.body.GroupName,
             
             email:req.body.email || " " ,
             memberName:req.body.memberName,
             groupId:req.body.groupid || shortid.generate(),
             createdOn:time.now()
         })    
     newUser.save((err,createdgroup)=>{
         if(err){
             logger.error(`${err}`,'error at create group',8);
             let apiResponse= response.generate(err,'Group cannot be created',400,null);
             res.send(apiResponse);
         }else{
             let apiResponse= response.generate(null,'group created successfully',200,createdgroup)
             res.send(apiResponse);
         }
     })        
                 

   }

   let getAllMembersOfGroup = (req,res)=>{
       if(req.body.groupId){
            group.find({'groupId':req.body.groupId},(err,all)=>{
                if(err){
                    logger.error(err,'error while getting groups',10);
                    let apiresponse= response.generate(err,'some error occured at getallGroups',400,null);
                    res.send(apiresponse);
                }else if(check.isEmpty(all)){
                   let apiresponse= response.generate('you have no groups','no groups are found',404,null);
                   res.send(apiresponse);
                }
                else{
                    
                    res.send(all);
                }
            })
       }else{
           logger.error(null,'no group Id is sent',2)
           let apiresponse=response.generate(null,'please give accurate group Id',400,null);
           res.send(apiresponse);
       }
   }

    let  joinGroup = (req,res)=>{
        let validateGroup = ()=>{
            return new Promise((resolve,reject)=>{
               if(req.body.groupId){
                   group.findOne({'groupId': req.body.groupId},(err,retrievedGroup)=>{
                        if(err){
                            logger.error(err,'error at joinGroup,validation of group',10)
                            let apiResponse=response.generate(err,'some error occured at joinGroup validation of group',400,null)
                            reject(apiResponse);
                        }else if(check.isEmpty(retrievedGroup)){
                            logger.error(err,'no group found for joining',6);
                            let apiResponse=response.generate(err,'no group found on this id',404,null);
                            reject(apiResponse);
                        }else{
                            resolve(retrievedGroup);
                        }
                   })
               }
            })
        }
      let joinMemberingroup = (GroupDetails)=>{
          return new Promise((resolve,reject)=>{
              console.log('groupdetails'+GroupDetails);
             let member = new group({
                groupName:GroupDetails.groupName,
                
                email:req.body.email,
                memberName:req.body.memberName, 
                groupId:GroupDetails.groupId,
                createdOn:time.now()
             }) 
             console.log('member'+member)
             member.save((err,savedResult)=>{
                 if(err){
                     logger.error(err,'error at joinMemberin group ,save',10);
                     let apiresponse= response.generate(err,'error at joining group',400,null);
                     reject(apiresponse)
                 }else {
                     let apiResponse=response.generate(null,`you joined group ${GroupDetails.groupName} successfully`,200,savedResult);
                     resolve(apiResponse);
                 }
             })  
          })
      }
      validateGroup(req,res)
      .then(joinMemberingroup)
      .then((resolve)=>{
          res.send(resolve);
      }) 
      .catch((err)=>{
          res.send(err);
      })
    } 

   let getallGroups = (req,res)=>{
       group.find({'email':req.body.email},(err,all)=>{
           if(err){
               logger.error(err,'error while getting groups',10);
               let apiresponse= response.generate(err,'some error occured at getallGroups',400,null);
               res.send(apiresponse);
           }else if(check.isEmpty(all)){
              let apiresponse= response.generate('you have no groups','no groups are found',404,null);
              res.send(apiresponse);
           }
           else{
               
               res.send(all);
           }
       })
   }   
      let allgroupchat =(req,res)=>{
        grpchat.find((err,all)=>{
            if(err){
                logger.error(err,'error while getting groups',10);
                let apiresponse= response.generate(err,'some error occured at getallGroups',400,null);
                res.send(apiresponse);
            }else if(check.isEmpty(all)){
               let apiresponse= response.generate('you have no groups','no groups are found',404,null);
               res.send(apiresponse);
            }
            else{
                
                res.send(all);
            }
        }) 
      }


       let getGroupChat = (req,res)=>{
           console.log(req.query.groupId+" "+req.query.skip);
            let findquery={
                groupId:req.query.groupId
            }
               grpchat.find(findquery).skip(parseInt(req.query.skip)||0).sort('-createdOn').limit(20)
               .exec((err,result)=>{
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Chat Controller: getUsersChat', 10)
                    let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
                    res.send(apiResponse)
                  } else if (check.isEmpty(result)) {
                    logger.info('No Chat Found', 'Chat Controller: getUsersChat')
                    let apiResponse = response.generate(true, 'No Chat Found', 404, null)
                    res.send(apiResponse)
                  } else {
                    console.log('chat found and listed.')
        
                    // reversing array.
                    let reverseResult = result.reverse()
        
                    res.send(result)
                  }
               })
            
      }

   let sendInvitation = (req,res)=>{
    
       let transporter = nodemailer.createTransport({
           host: 'smtp.gmail.com',
           port: 587,
           secure: false, // true for 465, false for other ports
           auth: {
               user: 'phanindrasai515@gmail.com', // generated ethereal user
               pass: 'Phanindra515$$' // generated ethereal password
           },
           tls:{
                rejectUnauthorized:false
           }
       });

       let mailOptions = {
           from: '"Chat-app" <phanindrasai515@gmail.com>', // sender address
           to: req.body.email, // list of receivers
           subject: 'Got invitation into group', // Subject line
           text: `if you are intrested please join here http://localhost:4200/joinGroup/${req.body.userId}/${req.body.name}/${req.body.groupId}/${req.body.email}/${req.body.memberName}`, // plain text body
           html:'' ,// html body
       };
        // send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
   if (error) {
       return console.log(error);
   }
   console.log('Message sent: %s', info.messageId);
   // Preview only available when sending through an Ethereal account
   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
   let apiresponse = response.generate(null,'invitation sent successfully',200,info)
   res.send(apiresponse);
   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});
}


    
   






module.exports = {
    CreateGroup:CreateGroup,
    signUpFunction: signUpFunction,
    loginFunction: loginFunction,
    forgotpassword:forgotpassword,
    PasswordChange:PasswordChange,
    find:find,
   sendInvitation:sendInvitation,
   findall:findall,
   joinGroup:joinGroup,
   getallGroups:getallGroups,
   getGroupChat:getGroupChat,
   allgroupchat:allgroupchat,
   getAllMembersOfGroup:getAllMembersOfGroup,
   editGroupName:editGroupName,
   leaveFromGroup:leaveFromGroup,
   deletetotalGroup:deletetotalGroup,
   deleteAccount:deleteAccount,
   deleteGroupsOfUser:deleteGroupsOfUser
}// end exports