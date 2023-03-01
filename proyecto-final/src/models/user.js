const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, require:true, unique: true },
  pass: { type: String, require:true },
  name: { type: String, require:true },
  apellido: String,
});

module.exports = model("Users", userSchema);