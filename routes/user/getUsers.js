const Usuario = require("../../models/usuarios");

const getUsers = async(req, res) => {
    try {
        const page = parseInt(req.query.page || 0);
        const rowsPerPage = parseInt(req.query.rowsPerPage || 10);

        const skip = page * rowsPerPage;
        const count = await Usuario.countDocuments()
        const result = await Usuario.find().skip(skip).limit(rowsPerPage);

        res.send({
            page,
            rowsPerPage,
            data: result,
            count
        });
    }
    catch(err) {
        console.log(err)
        res.status(503).send(err)
    }
}

module.exports = getUsers;