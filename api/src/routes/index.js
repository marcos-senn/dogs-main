const router = require('express').Router();
const {getDogs} = require('../controllers/getDogs');
const {getDogById} = require('../controllers/getDogById');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


router.get('/dogs', getDogs);
router.get('/dogs/:id', getDogById);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
