const router = require('express').Router();
const routeKaryawan = require('./karyawan');

// GET
router.use('/karyawan', routeKaryawan);


module.exports = router;