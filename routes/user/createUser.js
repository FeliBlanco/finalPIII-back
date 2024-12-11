const Usuario = require("../../models/usuarios");

const createUser = async(req, res) => {
    try {
        if(!("nombre" in req.body)) return res.status(400).send("nombre is required.");
        if(!("correo" in req.body)) return res.status(400).send("correo is required.");

        const {
            nombre,
            correo,
            fecha_nacimiento,
            direccion,
            telefono
        } = req.body;

        const new_user = new Usuario({
            nombre,
            correo,
            fecha_nacimiento,
            direccion,
            telefono
        })
        const result_new_user = await new_user.save();
        res.status(201).send(result_new_user)
    }
    catch(err) {
        console.log(err)
        res.status(503).send(err)
    }
}

module.exports = createUser;