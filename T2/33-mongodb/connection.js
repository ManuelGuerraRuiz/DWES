const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

async function connection(){
    const config = {
        user: 'mgr',
        pass: 'manolito99'
    }

    await mongoose.connect('mongodb+srv://mgr:manolito99@cluster0.w1mahhd.mongodb.net/?retryWrites=true&w=majority',config);
    console.log('Conectado correctamente');

}

module.exports = connection;