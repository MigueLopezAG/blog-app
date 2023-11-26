const express = require('express');

const router = express.Router();

const entriesCntrl = require('../controllers/entriesController.js');

router.get("/", entriesCntrl.getEntries);
router.post("/", entriesCntrl.saveEntry);
//router.get("/:search", orderCtrl.searchEntry);

module.exports = router;