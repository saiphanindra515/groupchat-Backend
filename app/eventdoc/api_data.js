define({ "api": [
  {
    "type": "",
    "url": "{emit}",
    "title": "",
    "version": "0.0.1",
    "group": "Emit_disconnect",
    "description": "<p>This event (&quot;disconnect&quot;) has to be listened, when the user is disconnected to show proper message.</p>",
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit_disconnect",
    "name": "Emit"
  },
  {
    "group": "Emit_disconnect",
    "type": "",
    "url": "{emit}",
    "title": "",
    "version": "0.0.1",
    "description": "<p>This event (&quot;chat-msg&quot;) has to be emitted to identify an individual chat message that has been send. The following data has to be emitted { senderName: 'John Doe', senderId: 'userId of sender', receiverName: 'Smith', receiverId: 'userId of receiver', message: 'your chat message', createdOn: date }</p>",
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit_disconnect",
    "name": "Emit"
  },
  {
    "type": "",
    "url": "{emit}",
    "title": "",
    "version": "0.0.1",
    "group": "Emit_group_chat",
    "description": "<p>This event (&quot;group-chat&quot;) has to be listened on server and it is emited by user it contains object with groupId.All group members listen to its groupId.groupId works as channel for sending group chat.</p>",
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit_group_chat",
    "name": "Emit"
  },
  {
    "type": "",
    "url": "{emit}",
    "title": "",
    "version": "0.0.1",
    "group": "Emit_online_user_list",
    "description": "<p>This event (&quot;online-user-list&quot;) has to be listened on the user's end to identify all available users that are currently online. All available users can be shown to the user based on which he can start chatting with a user. The output will be an object, object has key as userId and value as full name.</p>",
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit_online_user_list",
    "name": "Emit"
  },
  {
    "type": "",
    "url": "{emit}",
    "title": "",
    "version": "0.0.1",
    "group": "Emit_typing",
    "description": "<p>This event (&quot;typing&quot;) has to be emited on user end while user is typing.in object we have listnerId in server we emit listnerId.in individual chat listnerId is equal to receiverId.in groupchat listnerId is equal to groupId { senderName:&quot;string&quot;, listnerId:&quot;string&quot;, &quot;senderId&quot;:&quot;string&quot; }</p>",
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit_typing",
    "name": "Emit"
  },
  {
    "type": "",
    "url": "{emit}",
    "title": "",
    "version": "0.0.1",
    "group": "Emit_verifyUser",
    "description": "<p>This event (&quot;verifyUser&quot;) has to be listened on the user's end to verify user authentication. user will only be set as online user after verification of authentication token.</p>",
    "filename": "libs/socketLib.js",
    "groupTitle": "Emit_verifyUser",
    "name": "Emit"
  }
] });
