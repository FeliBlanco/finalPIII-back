const { Router } = require('express');
const getUser = require('./getUser');
const getUsers = require('./getUsers');
const createUser = require('./createUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');



const router = Router();


router.get('/:id', getUser)
router.get('/', getUsers)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router;