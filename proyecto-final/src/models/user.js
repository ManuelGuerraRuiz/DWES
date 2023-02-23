const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, require, unique: true },
  pass: { type: String, require },
  name: { type: String, require },
  apellido: String,
});

module.exports = model("Users", userSchema);