const express = require('express');
const router = express.Router();
const controllers =
require('../controllers/main')

router.get('/', controllers.getM);


module.exports = router;