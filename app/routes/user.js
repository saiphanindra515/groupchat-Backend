const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;

    // defining routes.


    // params: firstName, lastName, email, mobileNumber, password
    app.post(`${baseUrl}/signup`, userController.signUpFunction);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/signup api for user signup.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     * @apiParam {string} firstName name of user. (body params) (required)
     * @apiParam {string} lastName lastname of user. (body params) (required)
     *  @apiParam {string} mobileNumber phne number of user. (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "data":{
               "Groups": []
               "createdOn": null
               "email": "string"
               "firstName": "string"
               "lastName": "string"
               "mobileNumber": "number"
               "userId": "String"
               "__v": 0
               "_id": "string"
               
            }   
            "error": false
            "message": "user created"
            "status": 400
        }
    */

    // params: email, password.
    app.post(`${baseUrl}/login`, userController.loginFunction);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login  api to login user.
     *
     * @apiParam {string} email email of the user. (auth headers) (required)
     *  @apiParam {string} password password of user. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     *  @apiSuccessExample {object} Success-Response:
         {
             data:{
                  "id":"string"
                 "token":"string"
             }
            "userDetails":{
               "Groups": []
               "createdOn": null
               "email": "string"
               "firstName": "string"
               "lastName": "string"
               "mobileNumber": "number"
               "userId": "String"
               "__v": 0
               "_id": "string"
               
            }   
            "error": false
            "message": "login successful"
            "status": 400
        }
     *
    */

    // auth token params: userId.
    app.post(`${baseUrl}/forgotPassword`, userController.forgotpassword);
     /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/forgotPassword api for user to implement forgotPassword.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     *  @apiSuccessExample {object} Success-Response:
         {
            "data":{
               "Groups": []
               "createdOn": null
               "email": "string"
               "firstName": "string"
               "lastName": "string"
               "mobileNumber": "number"
               "userId": "String"
               "__v": 0
               "_id": "string"
               
            }   
            "error": false
            "message": "email sent successfully"
            "status": 400
        }

        
    */


    app.post(`${baseUrl}/changePassword`, userController.PasswordChange);
     /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/changePassword api for user to change password.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     * @apiParam {string} id id of user. (body params) (required)
     *  
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "password changed",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc",
                "userDetails": {
                "mobileNumber": 2234435524,
                "email": "someone@mail.com",
                "lastName": "Sengar",
                "firstName": "Rishabh",
                "userId": "-E9zxTYA8"
            }

        }
    */


    app.post(`${baseUrl}/find`, userController.find);
     /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/find  api for finding a user.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "found user",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc",
                "userDetails": {
                "mobileNumber": 2234435524,
                "email": "someone@mail.com",
                "lastName": "Sengar",
                "firstName": "Rishabh",
                "userId": "-E9zxTYA8"
            }

        }
    */


    app.post(`${baseUrl}/createGroup`, userController.CreateGroup);
     /**
     * @apiGroup GroupChat
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/createGroup api for creating group.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} GroupName name of Group. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "group created successfully",
            "status": 200,
            "data": {
                
            
                "createdOn": "Date",
                "email": "string",
                "groupName": "string",
                "groupId": "string"
            

        }
    */


    app.get(`${baseUrl}/findall`,userController.findall);
     /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/findall api to find all Users.
     *
     
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Login Successful",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc",
                "userDetails": {
                "mobileNumber": 2234435524,
                "email": "someone@mail.com",
                "lastName": "Sengar",
                "firstName": "Rishabh",
                "userId": "-E9zxTYA8"
            }

        }
    */


    app.post(`${baseUrl}/sendInvitation`,userController.sendInvitation);
     /**
     * @apiGroup GroupChat
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/sendInvitation api to send invitation to new group.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} groupName name of group. (body params) (required)
     * @apiParam {string} groupId Id of group. (body params) (required)
     * @apiParam {string} name name of person who created the group. (body params) (required)
     * @apiParam {string} userId Id of joiner. (body params) (required)
     *  @apiParam {string} memberName name of new member. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "invitation sent Successful",
            "status": 200,
        

        }
    */


    app.post(`${baseUrl}/joinGroup`,userController.joinGroup);
     /**
     * @apiGroup GroupChat
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/joinGroup api for user to join a group.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} groupId id of group (body params) (required)
     *  @apiParam {string} memberName name of person who is willing to join in group (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
             "error": false,
            "message": "you joined group successfully",
            "status": 200,
            "data": {
                
            
                "createdOn": "Date",
                "email": "string",
                "groupName": "string",
                "groupId": "string",
                "memberName":"string"
            

        }
        }
    */


    app.post(`${baseUrl}/getGroups`,userController.getallGroups);
      /**
     * @apiGroup GroupChat
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/getGroups api for all groups.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            
            "data": {
                "createdOn": "Date",
                "email": "string",
                "groupName": "string",
                "groupId": "string",
                "memberName":"string"
            }

        }
    */


    app.get(`${baseUrl}/getGroupChat`,userController.getGroupChat);
     /**
     * @apiGroup GroupChat
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/getGroupChat api for getting groupchat.
     *
     * @apiParam {string} skip skip stores how many messages it has to skip(pagination). (query params) (required)
     * @apiParam {string} groupId id of group. (query params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            
            "data": {
               "groupName":"string",
               "groupId":"string",
               "senderName":"string",
               "message":"string",
               "senderemail":"string",
               "createdOn":"string"
            }

        }
    */


    app.get(`${baseUrl}/allgroupchat`,userController.allgroupchat);
    
            

    app.post(`${baseUrl}/getMembersOfGroup`,userController.getAllMembersOfGroup);
     /**
     * @apiGroup GroupChat
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/getMembersOfGroup api for getting members of group.
     *
     * @apiParam {string} groupId id of group. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            
             
                

                 "createdOn": "Date",
                "email": "string",
                "groupName": "string",
                "groupId": "string",
                "memberName":"string"
            

        }
    */


    app.put(`${baseUrl}/editGroupName`,userController.editGroupName);
     /**
     * @apiGroup GroupChat
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/editGroupName api for user login.
     *
     * @apiParam {string} groupId id of Group (body params) (required)
     * @apiParam {string} groupName New group name (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
             "createdOn": "Date",
                "email": "string",
                "groupName": "string",
                "groupId": "string",
                "memberName":"string"
            }

        }
    */


    app.post(`${baseUrl}/deleteGroup`,userController.deletetotalGroup);
     /**
     * @apiGroup GroupChat
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/deleteGroup api for deleting group.
     *
     * @apiParam {string} groupId id of group. (body params) (required)
     
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "deleted group Successful",
            "status": 200,
            "data": {
                 "createdOn": "Date",
                "email": "string",
                "groupName": "string",
                "groupId": "string",
                "memberName":"string"
            }

        }
    */


    app.post(`${baseUrl}/leaveGroup`,userController.leaveFromGroup);
     /**
     * @apiGroup GroupChat
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/leaveGroup api for leaving group.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} groupId id of group. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "you Left from group Successfully",
            "status": 200,
            "data": {
                 "createdOn": "Date",
                "email": "string",
                "groupName": "string",
                "groupId": "string",
                "memberName":"string"
            }

        }
    */
   app.post(`${baseUrl}/deleteAccount`,userController.deleteAccount);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/deleteAccount api for delete Account
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} userId id of person. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "account deleted",
            "status": 200,
            "data": "null"

        }
    */
   app.post(`${baseUrl}/deleteusergroups`,userController.deleteGroupsOfUser);
     /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/deleteusersgroups api for deleting groups of user after account deletion.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * 
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "account deleted",
            "status": 200,
            "data": "null"

        }
    */
}
