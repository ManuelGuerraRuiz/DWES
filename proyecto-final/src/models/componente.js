const { Schema, model } = require("mongoose");

const options = { discriminatorKey: 'tipo'};

const componenteSchema = new Schema({
    referencia : {type: Number, require: true , unique : true},
    precio : Number,
    name : String,

});

const Componente = model('Componentes', componenteSchema);

const placaBaseSchema = new Schema({
    tamano : String
}, options);
const PlacaBase = Componente.discriminator("PlacaBase", placaBaseSchema);

const procesadorSchema = new Schema({
    ghz : String
}, options);
const Procesador = Componente.discriminator('Procesador', procesadorSchema);

const ramSchema = new Schema({}, options);
const Ram = Componente.discriminator('Ram', ramSchema);

const graficaSchema = new Schema({}, options);
const Grafica = Componente.discriminator('Grafica', graficaSchema);

const refrigeracionSchema = new Schema({}, options);
const Refrigeracion = Componente.discriminator('Refrigeracion', refrigeracionSchema);

const discoDuroSchema = new Schema({}, options);
const DiscoDuro = Componente.discriminator('DiscoDuro', discoDuroSchema);

module.exports = {
    Componente,
    PlacaBase,
    Procesador,
    Ram,
    Grafica,
    Refrigeracion,
    DiscoDuro
}
