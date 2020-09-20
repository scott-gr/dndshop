const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
  username:{
    type : String,
    required : true,
    min : 6,
    max : 20
  },
  password:{
    type : String,
    required : true,
  },
  role : {
    type : String,
    enum : ['dm', 'player'],
    required : true
  },
  groupId : {
    type : Number,
    
  }
  }

});