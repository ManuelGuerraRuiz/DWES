const { User } = require('../../models');

async function findAllUsers(filters){
    return User.find(filters);
}

async function findUserById(id){
    return User.findById(id);
}

module.exports = {
    findAllUsers,
    findUserById,
}