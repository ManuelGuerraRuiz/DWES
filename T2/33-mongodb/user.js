const { Schema,model } = require("mongoose");


    const userSchema = new Schema({
       name : String,
       age: Number,
      });

module.exports = model('User',userSchema);