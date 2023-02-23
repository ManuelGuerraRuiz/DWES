const { Schema,model } = require("mongoose");


    const ordenadorSchema = new Schema({
       id : {type: Number,require,unique : true},
       categoria : String,
       precio : Number,
       name : String,
       componentes : Array,
       foto : String,
      });

module.exports = model('Ordenadores',ordenadorSchema);