const mongoose = require('mongoose');
const schema = mongoose.Schema;

let grpchat = new schema({
    groupName:{
        type:String
    },
    groupId:{
        type:String
    },
    message:{
        type:String
    },
    senderName:{
        type:String
    },
    senderemail:{
        type:String
    },
    createdOn:{
        type:Date
    }
})
mongoose.model('grpchat',grpchat);