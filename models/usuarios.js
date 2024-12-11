const mongoose = require("mongoose");



const UsuarioSchema = new mongoose.Schema({
    nombre: String,
    correo: String
})

const Usuario = mongoose.model('Usuarios', UsuarioSchema);

module.exports = Usuario;