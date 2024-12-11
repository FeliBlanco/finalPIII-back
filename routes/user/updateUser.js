const Usuario = require("../../models/usuarios")

const updateUser = async(req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        let data_update = {};

        if("nombre" in body) {
            data_update.nombre = body.nombre;
        }
        if("correo" in body) {
            data_update.correo = body.correo;
        }

        if(Object.keys(data_update).length == 0) return res.status(400).send("No se envió nada para actualizar.")

        const result = await Usuario.findByIdAndUpdate(id, data_update, {new:true})
        if(!result) return res.status(404).send("user not found")
        res.send(result)
    }
    catch(err) {
        console.log(err)
        res.status(503).send(err)
    }
}

module.exports = updateUser;