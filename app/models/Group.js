const mongoose = require('mongoose');
const Schema = mongoose.Schema

let groupSchema = new Schema({
    groupName:{
        type:String,
        
    },
    groupId:{
      type:String,
       
    },
    member:{
        type:String
    }
    ,message:{
        type:String,

    },email:{
        type:String
    },
    createdOn:{
        type:Date
    }

})
mongoose.model('groupSchema',groupSchema);

