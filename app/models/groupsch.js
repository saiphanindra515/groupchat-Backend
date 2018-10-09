const mongoose = require('mongoose');
const schema= mongoose.Schema;

let group= new schema({
    groupName:{
        type:String,
        
    },
    groupId:{
      type:String,
       
    },
    memberName:{
      type:String
    },
    email:{
        type:String
    },
    createdOn:{
        type:Date
    }
})

mongoose.model('group',group);