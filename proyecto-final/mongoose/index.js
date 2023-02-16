const connection = require('./connection');
const User = require('./user');

async function init(){
    await connection();

    const users = await User.findById("63e54bdf20ff7630611dc4ab");

    console.log(users);
}


init();
