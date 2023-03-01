const { Schema, model, Types } = require("mongoose");

const ordenadorSchema = new Schema({
  referencia: { type: Number, require: true, unique: true },
  categoria: { type: String, enum: ['gaming', 'basic', 'profesional'], required: true },
  precio: Number,
  name: String,
  componentes: [String],
});

module.exports = model("Ordenadores", ordenadorSchema);
