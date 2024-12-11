const Usuario = require("../../models/usuarios");

const getUser = async(req, res) => {
    try {
        const id = req.params.id;
        const result = await Usuario.findById(id)
        if(!result) return res.status(404).send("user not found");
        res.send(result)
    }
    catch(err) {
        console.log(err)
        res.status(503).send()
    }
}

module.exports = getUser;