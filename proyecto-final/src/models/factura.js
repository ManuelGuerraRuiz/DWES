const { Schema, model, Types } = require("mongoose");
const { format } = require("winston");

const facturaSchema = new Schema({
  referencia: { type: Number, require: true, unique: true },
  fecha: { type: String, format: Date,},
  pago: Number,
  user: { type: Types.ObjectId, ref: "Users" },
  ordenador: { type: Types.ObjectId, ref: "Ordenadores" },
});

module.exports = model("Facturas", facturaSchema);
