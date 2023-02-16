const { Schema,model } = require("mongoose");


    const ordenadorSchema = new Schema({
       id : {type: Number,require,unique : true},
       categoria : String,
       precio : Number,
       name : String,
       componente : String,
       foto : String,
      });

module.exports = model('Ordenador',ordenadorSchema);