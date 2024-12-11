const Usuario = require("../../models/usuarios");

const getUsers = async(req, res) => {
    try {
        const page = req.query.page || 0;
        const rowPerPage = req.query.rowPerPage || 10;

        const skip = page * rowPerPage;
        const count = await Usuario.countDocuments()
        const result = await Usuario.find().skip(skip).limit(rowPerPage);

        res.send({
            page,
            rowPerPage,
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