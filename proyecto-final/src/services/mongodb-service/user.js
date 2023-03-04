const { User } = require("../../models");

function getAllUsers(filters) {
  return User.find(filters);
}

async function findAllUsers(filters) {
  return User.find(filters);
}

async function findUserById(id) {
  return User.findById(id);
}

async function createUser(body) {
  const createdUser = await new User(body).save();
  return createdUser;
}

async function editUser(body) {
  const { email, ...datosParaActualizar } = body;

  /* Opcion A 
    const usuarioDeLaBBDD = await User.findOne({ email });
    Object.assign(usuarioDeLaBBDD, datosParaActualizar);
    usuarioDeLaBBDD.save();*/

  /* Opcion B */
  const usuarioActualizado = await User.findOneAndUpdate(
    { email },
    datosParaActualizar
  );

  return usuarioActualizado;
}

async function deleteUser(email) {
  const filter = { email: email };
  const deletedUser = await User.deleteOne(filter);
  if (!deletedUser) {
    const error = new Error(`User with email ${email} not found`);
    error.statusCode = 404;
    throw error;
  }
  return deletedUser;
}

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  deleteUser,
  editUser,
  getAllUsers,
};
