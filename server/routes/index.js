const express = require('express');

const router = express.Router();

router.use('/entries', require('./entriesRoute.js'));

module.exports = router;