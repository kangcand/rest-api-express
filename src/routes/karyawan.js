
const router = require('express').Router();
const { karyawan } = require('../controllers');

// menghapus data berdasarkan parameter 'id'
router.get('/', karyawan.getDataKaryawan);

// menambah data 
router.post('/add', karyawan.addDataKaryawan);

// mengedit data berdasarkan parameter 'id'
router.put('/edit/:id', karyawan.editDataKaryawan);

// menghapus data berdasarkan parameter 'id'
router.delete('/delete/:id', karyawan.deleteDataKaryawan);

// show data berdasarkan parameter 'id'
router.get('/:id', karyawan.showDataKaryawanById);

module.exports = router;