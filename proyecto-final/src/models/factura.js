const { Schema,model } = require("mongoose");


    const facturaSchema = new Schema({
       fecha : Number,
       pago : Number,
       refUser: Number,
      });

module.exports = model('Factura',facturaSchema);