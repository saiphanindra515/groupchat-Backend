const token = require('./token');
const socketio = require('socket.io');
const mongoose = require('mongoose');
const shortid = require('shortid');
const logger = require('./loggerLib');
const events = require('events')
const eventEmitter = new events.EventEmitter();
const check = require('./checkLib');
const response = require('./responseLib');  
const redislib = require('./redisLib');
const ChatModel = mongoose.model('Chat');
const grpChat = mongoose.model('grpchat');
let setServer = (server)=>{
    allOnlineUserList =  [];

    let io = socketio.listen(server);
    let myIo = io.of('');
    console.log('connection established')
    myIo.on('connection',(socket)=>{
     socket.emit('verifyUser','verified');
      /**
	 * @api {emit} 
	 * @apiVersion 0.0.1
	 * @apiGroup Emit verifyUser
     *@apiDescription This event ("verifyUser") has to be listened on the user's end to verify user authentication.
       user will only be set as online user after verification of authentication token.
     
     */

     socket.on('set-user',(authToken)=>{
        
         console.log('i am in setuser listen');
        token.verifyClaimWithoutSecret(authToken,(err,user)=>{
            console.log('verifyclaimwithoutsecret performed');
            if(err){
                socket.emit('authError',{status:500,message:'please provide authToken'})
            }else{
                let currentUser = user.data;
                let fullName = `${currentUser.firstName} ${currentUser.lastName}`;
                socket.userId=currentUser.userId
                
                console.log(`${fullName} is online`);
                let userObj = {userId:currentUser.userId,fullName:fullName}
               // allOnlineUserList.push(userObj);
                //console.log(allOnlineUserList);
                //socket.room='mychat'
                //socket.join(socket.room)
                key=currentUser.userId;
               redislib.setANewOnlineUserInHash('online-users',key,fullName,(err,result)=>{
                   if(err){
                       console.log(err);
                   }else{
                       redislib.getAllUsersInAHash('online-users',(err,result)=>{
                           if(err){
                               console.log(err);
                           }
                           else{
                               console.log('i am in else');
                               console.log(result);
                               socket.room='ed-chat';
                               socket.join(socket.room);
                               myIo.to(socket.room).emit('online-users-list',result);
      /**
	 * @api {emit} 
	 * @apiVersion 0.0.1
	 * @apiGroup Emit online-user-list
     *@apiDescription This event ("online-user-list") has to be listened on the user's end to identify all available users that are currently online.
     All available users can be shown to the user based on which he can start chatting with a user.
     The output will be an object, object has key as userId and value as full name.
     
     */
                           }
                       })
                   }
               })

            }
        })
     })

     socket.on('disconnect',()=>{
         /**
	 * @api {emit} 
	 * @apiVersion 0.0.1
	 * @apiGroup Emit disconnect
     *@apiDescription This event ("disconnect") has to be listened, when the user is disconnected to show proper message.

     
     */
     



        // let removeIndex = allOnlineUserList.map(function(user){return user.userId}).indexOf(socket.userId);
         //allOnlineUserList.splice(removeIndex,1);
         //console.log(allOnlineUserList)
         //console.log('disconnected');
         //console.log(socket.userId)
         if (socket.userId) {
            redislib.deleteUserFromHash('online-users', socket.userId)
            redislib.getAllUsersInAHash('online-users', (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    socket.leave(socket.room)
                    myIo.to(socket.room).emit('online-users-list', result);


                }
            })
        }




     })
       socket.on('chat-msg',(data)=>{
     /**
      *  @apiGroup Emit disconnect
	 * @api {emit} 
	 * @apiVersion 0.0.1
	 *
     *@apiDescription This event ("chat-msg") has to be emitted to identify an individual chat message that has been send.
    The following data has to be emitted
                            {
                                senderName: 'John Doe',
                                senderId: 'userId of sender',
                                receiverName: 'Smith',
                                receiverId: 'userId of receiver',
                                message: 'your chat message',
                                createdOn: date
                            }
                        

     
     */
     
           data.chatId=shortid.generate();
           
           myIo.emit(data.receiverId,data);
           eventEmitter.emit('save-chat',data);
       })
    
       eventEmitter.on('save-chat',(data)=>{

           let chatObject = new ChatModel({
            chatId: data.chatId,
            senderName: data.senderName,
            senderId: data.senderId,
            receiverName: data.receiverName || '',
            receiverId: data.receiverId || '',
            message: data.message,
            chatRoom: data.chatRoom || '',
            createdOn: data.createdOn
           })
           chatObject.save((err,result)=>{
            if (err) {
                console.log(`error occurred: ${err}`);
            }
            else if (result == undefined || result == null || result == "") {
                console.log("Chat Is Not Saved.");
            }
            else {
                console.log("Chat Saved.");
                console.log(result);
            }
           });
       })
     
         
  

     socket.on('typing',(data)=>{
              /**
	 * @api {emit} 
	 * @apiVersion 0.0.1
	 * @apiGroup Emit typing
     *@apiDescription This event ("typing") has to be emited on user end while user is typing.in object we have listnerId
     in server we emit listnerId.in individual chat listnerId is equal to receiverId.in groupchat listnerId is equal to groupId
     {
         senderName:"string",
         listnerId:"string",
         "senderId":"string"
     }

     
     */
     console.log(data);
     myIo.emit(data.listenId , data);
        
     })
    socket.on('group-chat',(data)=>{
             /**
	 * @api {emit} 
	 * @apiVersion 0.0.1
	 * @apiGroup Emit group-chat
     *@apiDescription This event ("group-chat") has to be listened on server and it is emited by user it contains object 
       with groupId.All group members listen to its groupId.groupId works as channel for sending group chat.

     
     */
     
        
        myIo.emit(data.groupId,data);
       
    })
    socket.on('save-grp-chat',(data)=>{
        let grpchatObject = new grpChat({
            groupName:data.groupName,
            groupId:data.groupId,
            message:data.message,
            senderName:data.senderName,
            senderemail:data.senderemail,
            createdOn:data.createdOn
        })
        grpchatObject.save((err,result)=>{
         if (err) {
             console.log(`error occurred: ${err}`);
         }
         else if (result == undefined || result == null || result == "") {
             console.log("Chat Is Not Saved.");
         }
         else {
             console.log("Chat Saved.");
             console.log(result);
         }
        });
    });
  
})
    
            
   
}

module.exports ={
    setServer:setServer
}