const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.set("strictQuery", false);

async function init(){
    const config = {
        user: 'user',
        pass: 'user'
    }

    await mongoose.connect('mongodb+srv://mgr:manolito99@cluster0.w1mahhd.mongodb.net/?retryWrites=true&w=majority');
    console.log('Conectado correctamente');

    const userSchema = new Schema({
       name : String,
       age: Number,
      });

      const User = mongoose.model('User', userSchema);

      const userBody = {
        name: "Manuel",
        age: "23",
      }

      const userDoc = new User(userBody);

      const user = await userDoc.save();

      const users = await User.find();

      console.log(user);

      
}

init();