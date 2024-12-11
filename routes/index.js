const { Router } = require('express');

const router = Router();

router.use('/user', require('./user/index.js'))

module.exports = router;