define({ "api": [
  {
    "group": "GroupChat",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/createGroup",
    "title": "api for creating group.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "GroupName",
            "description": "<p>name of Group. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"group created successfully\",\n    \"status\": 200,\n    \"data\": {\n        \n    \n        \"createdOn\": \"Date\",\n        \"email\": \"string\",\n        \"groupName\": \"string\",\n        \"groupId\": \"string\"\n    \n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "GroupChat",
    "name": "PostApiV1UsersCreategroup"
  },
  {
    "group": "GroupChat",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/deleteGroup",
    "title": "api for deleting group.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupId",
            "description": "<p>id of group. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"deleted group Successful\",\n    \"status\": 200,\n    \"data\": {\n         \"createdOn\": \"Date\",\n        \"email\": \"string\",\n        \"groupName\": \"string\",\n        \"groupId\": \"string\",\n        \"memberName\":\"string\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "GroupChat",
    "name": "PostApiV1UsersDeletegroup"
  },
  {
    "group": "GroupChat",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/editGroupName",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupId",
            "description": "<p>id of Group (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupName",
            "description": "<p>New group name (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     \"createdOn\": \"Date\",\n        \"email\": \"string\",\n        \"groupName\": \"string\",\n        \"groupId\": \"string\",\n        \"memberName\":\"string\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "GroupChat",
    "name": "PostApiV1UsersEditgroupname"
  },
  {
    "group": "GroupChat",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/getGroupChat",
    "title": "api for getting groupchat.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "skip",
            "description": "<p>skip stores how many messages it has to skip(pagination). (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupId",
            "description": "<p>id of group. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \n    \"data\": {\n       \"groupName\":\"string\",\n       \"groupId\":\"string\",\n       \"senderName\":\"string\",\n       \"message\":\"string\",\n       \"senderemail\":\"string\",\n       \"createdOn\":\"string\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "GroupChat",
    "name": "PostApiV1UsersGetgroupchat"
  },
  {
    "group": "GroupChat",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/getGroups",
    "title": "api for all groups.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \n    \"data\": {\n        \"createdOn\": \"Date\",\n        \"email\": \"string\",\n        \"groupName\": \"string\",\n        \"groupId\": \"string\",\n        \"memberName\":\"string\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "GroupChat",
    "name": "PostApiV1UsersGetgroups"
  },
  {
    "group": "GroupChat",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/getMembersOfGroup",
    "title": "api for getting members of group.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupId",
            "description": "<p>id of group. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \n     \n        \n\n         \"createdOn\": \"Date\",\n        \"email\": \"string\",\n        \"groupName\": \"string\",\n        \"groupId\": \"string\",\n        \"memberName\":\"string\"\n    \n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "GroupChat",
    "name": "PostApiV1UsersGetmembersofgroup"
  },
  {
    "group": "GroupChat",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/joinGroup",
    "title": "api for user to join a group.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupId",
            "description": "<p>id of group (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "memberName",
            "description": "<p>name of person who is willing to join in group (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     \"error\": false,\n    \"message\": \"you joined group successfully\",\n    \"status\": 200,\n    \"data\": {\n        \n    \n        \"createdOn\": \"Date\",\n        \"email\": \"string\",\n        \"groupName\": \"string\",\n        \"groupId\": \"string\",\n        \"memberName\":\"string\"\n    \n\n}\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "GroupChat",
    "name": "PostApiV1UsersJoingroup"
  },
  {
    "group": "GroupChat",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/leaveGroup",
    "title": "api for leaving group.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupId",
            "description": "<p>id of group. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"you Left from group Successfully\",\n    \"status\": 200,\n    \"data\": {\n         \"createdOn\": \"Date\",\n        \"email\": \"string\",\n        \"groupName\": \"string\",\n        \"groupId\": \"string\",\n        \"memberName\":\"string\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "GroupChat",
    "name": "PostApiV1UsersLeavegroup"
  },
  {
    "group": "GroupChat",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/sendInvitation",
    "title": "api to send invitation to new group.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupName",
            "description": "<p>name of group. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupId",
            "description": "<p>Id of group. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of person who created the group. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of joiner. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "memberName",
            "description": "<p>name of new member. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"invitation sent Successful\",\n    \"status\": 200,\n\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "GroupChat",
    "name": "PostApiV1UsersSendinvitation"
  },
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/count/unseen",
    "title": "to get count of unseen messages.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId sending user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"unseen chat count found.\",\n  \"status\": 200,\n  \"data\": 5\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/chatrouters.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatCountUnseen"
  },
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/find/unseen",
    "title": "to get paginated unseen chats of user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId sending user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>skip value for pagination. (query params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"chat found and listed.\",\n  \"status\": 200,\n  \"data\": [\n    {\n      \"chatId\": \"IELO6EVjx\",\n      \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n      \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n      \"message\": \"hello .. .. sourav\",\n      \"receiverId\": \"-E9zxTYA8\",\n      \"receiverName\": \"Rishabh Sengar\",\n      \"seen\": false,\n      \"senderId\": \"-cA7DiYj5\",\n      \"senderName\": \"sourav das\"\n    },\n    {\n      \"chatId\": \"ZcaxtEXPT\",\n      \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n      \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n      \"message\": \"hello rishabh .. .. .. \",\n      \"receiverId\": \"-cA7DiYj5\",\n      \"receiverName\": \"sourav das\",\n      \"seen\": false,\n      \"senderId\": \"-E9zxTYA8\",\n      \"senderName\": \"Rishabh Sengar\"\n    },\n    .........................\n  ]\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/chatrouters.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatFindUnseen"
  },
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/get/for/user",
    "title": "to get paginated chats of user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiverId",
            "description": "<p>userId receiving user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>skip value for pagination. (query params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"All Chats Listed\",\n  \"status\": 200,\n  \"data\": [\n    {\n      \"chatId\": \"IELO6EVjx\",\n      \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n      \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n      \"message\": \"hello .. .. sourav\",\n      \"receiverId\": \"-E9zxTYA8\",\n      \"receiverName\": \"Rishabh Sengar\",\n      \"senderId\": \"-cA7DiYj5\",\n      \"senderName\": \"sourav das\"\n    },\n    {\n      \"chatId\": \"ZcaxtEXPT\",\n      \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n      \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n      \"message\": \"hello rishabh .. .. .. \",\n      \"receiverId\": \"-cA7DiYj5\",\n      \"receiverName\": \"sourav das\",\n      \"senderId\": \"-E9zxTYA8\",\n      \"senderName\": \"Rishabh Sengar\"\n    },\n    .........................\n  ]\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/chatrouters.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatGetForUser"
  },
  {
    "group": "chat",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/chat/unseen/user/list",
    "title": "to get user list of unseen chats.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of logged in user. (query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"All Chats Listed\",\n  \"status\": 200,\n  \"data\": [\n    {\n      \"chatId\": \"IELO6EVjx\",\n      \"modifiedOn\": \"2018-03-05T15:36:31.026Z\",\n      \"createdOn\": \"2018-03-05T15:36:31.025Z\",\n      \"message\": \"hello .. .. sourav\",\n      \"receiverId\": \"-E9zxTYA8\",\n      \"receiverName\": \"Rishabh Sengar\",\n      \"senderId\": \"-cA7DiYj5\",\n      \"senderName\": \"sourav das\"\n    },\n    {\n      \"chatId\": \"ZcaxtEXPT\",\n      \"modifiedOn\": \"2018-03-05T15:36:39.548Z\",\n      \"createdOn\": \"2018-03-05T15:36:39.547Z\",\n      \"message\": \"hello rishabh .. .. .. \",\n      \"receiverId\": \"-cA7DiYj5\",\n      \"receiverName\": \"sourav das\",\n      \"senderId\": \"-E9zxTYA8\",\n      \"senderName\": \"Rishabh Sengar\"\n    },\n    .........................\n  ]\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/chatrouters.js",
    "groupTitle": "chat",
    "name": "GetApiV1ChatUnseenUserList"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/changePassword",
    "title": "api for user to change password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id of user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"password changed\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n        \"userDetails\": {\n        \"mobileNumber\": 2234435524,\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersChangepassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/deleteAccount",
    "title": "api for delete Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>id of person. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"account deleted\",\n    \"status\": 200,\n    \"data\": \"null\"\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersDeleteaccount"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/deleteusersgroups",
    "title": "api for deleting groups of user after account deletion.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"account deleted\",\n    \"status\": 200,\n    \"data\": \"null\"\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersDeleteusersgroups"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/find",
    "title": "api for finding a user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"found user\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n        \"userDetails\": {\n        \"mobileNumber\": 2234435524,\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersFind"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/findall",
    "title": "api to find all Users.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n        \"userDetails\": {\n        \"mobileNumber\": 2234435524,\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersFindall"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/forgotPassword",
    "title": "api for user to implement forgotPassword.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"data\":{\n       \"Groups\": []\n       \"createdOn\": null\n       \"email\": \"string\"\n       \"firstName\": \"string\"\n       \"lastName\": \"string\"\n       \"mobileNumber\": \"number\"\n       \"userId\": \"String\"\n       \"__v\": 0\n       \"_id\": \"string\"\n       \n    }   \n    \"error\": false\n    \"message\": \"email sent successfully\"\n    \"status\": 400\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersForgotpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api to login user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (auth headers) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n     data:{\n          \"id\":\"string\"\n         \"token\":\"string\"\n     }\n    \"userDetails\":{\n       \"Groups\": []\n       \"createdOn\": null\n       \"email\": \"string\"\n       \"firstName\": \"string\"\n       \"lastName\": \"string\"\n       \"mobileNumber\": \"number\"\n       \"userId\": \"String\"\n       \"__v\": 0\n       \"_id\": \"string\"\n       \n    }   \n    \"error\": false\n    \"message\": \"login successful\"\n    \"status\": 400\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for user signup.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>name of user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastname of user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>phne number of user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"data\":{\n       \"Groups\": []\n       \"createdOn\": null\n       \"email\": \"string\"\n       \"firstName\": \"string\"\n       \"lastName\": \"string\"\n       \"mobileNumber\": \"number\"\n       \"userId\": \"String\"\n       \"__v\": 0\n       \"_id\": \"string\"\n       \n    }   \n    \"error\": false\n    \"message\": \"user created\"\n    \"status\": 400\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  }
] });
