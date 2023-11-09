var express = require('express');
var vehicles_controller = require('../controllers/vehicles');

/* GET home page. */
router.get('/', vehicles_controller.vehicles_view_all_Page );

module.exports = router;