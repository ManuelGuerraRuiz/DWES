const { Schema,model, Types } = require("mongoose");


    const facturaSchema = new Schema({
       fecha : Number,
       pago : Number,
       user: {type: Types.ObjectId, ref:'User'},
       ordenador: {type: Types.ObjectId, ref: 'Ordenador' }
      });

module.exports = model('Facturas',facturaSchema);