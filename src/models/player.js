const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const PlayerSchema = new mongoose.Schema({
  characterName:{
    type : String,
    required : true,
    min : 2,
    max : 20
  },
  groupId:{
    type : Number,
    required : true,
    
  }

})