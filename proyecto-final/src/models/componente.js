const { Schema,model } = require("mongoose");

const options = { discriminatorKey: 'tipo' };

const componenteSchema = new Schema({
    nref : {type: Number, require: true , unique : true},
    categoria : String,
    precio : Number,
    name : String,
    componentes : Array,
    foto : String,
});

const Componente = model('Componentes', componenteSchema);

const placaBaseSchema = new Schema({}, options);
const PlacaBase = Componente.discriminator('PlacaBase', placaBaseSchema);

const procesadorSchema = new Schema({}, options);
const procesador = Componente.discriminator('Procesador', procesadorSchema);

module.exports = {
    Componente,
    PlacaBase,
}