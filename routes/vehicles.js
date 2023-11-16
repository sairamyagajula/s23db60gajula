var express = require('express');
var vehicles_controller = require('../controllers/vehicles');
var router = express.Router();

/* GET home page. */
router.get('/', vehicles_controller.vehicles_view_all_Page );

module.exports = router;

/* GET detail vehicles page */
router.get('/detail', vehicles_controller.vehicles_view_one_Page);

