const mongoose = require('mongoose')

module.exports = async config => {
    const{ user, pass} = config;
    await mongoose.connect('mongodb+srv://mgr:manolito99@cluster0.w1mahhd.mongodb.net/?retryWrites=true&w=majority',user,pass);
    console.log('Conectado correctamente');

}