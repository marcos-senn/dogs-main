const router = require("express").Router();

//Controllers
const { getDogs } = require("../controllers/getDogs");
const { getDogById } = require("../controllers/getDogById");
const { getDogsTemperaments } = require("../controllers/getTemperaments");
const { getDogsByname } = require("../controllers/getDogsByname");
const {postDog} = require("../controllers/postDog")

// ------ Configuracion rutas con sus handlers------
router.get("/dogs", (req, res) => {
 if (req.query.name) {
  getDogsByname(req, res);
 } else getDogs(req, res);
});
router.get("/dogs/:id", getDogById);
router.get("/temperaments", getDogsTemperaments);
router.post("/dogs", postDog)


module.exports = router;
