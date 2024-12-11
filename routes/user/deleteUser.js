const Usuario = require("../../models/usuarios");

const deleteUser = async(req, res) => {
    try {
        const id = req.params.id;
        await Usuario.deleteOne({_id: id});
        res.send()
    }
    catch(err) {
        console.log(err)
        res.status(503).send(err)
    }
}

module.exports = deleteUser;