const jwt = require('jsonwebtoken');

const { User } = require('../models');

async function login(req, res, next) {
  try {
    const { email, pass } = req.body;
    // eslint-disable-next-line no-console
    console.log(req.body);
    const user = await User.findOne({ email, pass });

    // Verificador de Correo y Contraseña
    if (!user) {
      return res.status(401).json({ message: 'El usuario o la contraseña es incorrecta' });
    }
    // Generador de token con clave secreta y expiracion de 1h
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      'admin',
      { expiresIn: '1h' },
    );
    return res.status(200).json({ token, email: user.email, userId: user._id});
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  login,
};