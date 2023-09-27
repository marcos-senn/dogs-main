const axios = require("axios");
require("dotenv").config();
const api_key = process.env.API_KEY;

//Modelo Temperament
const Temperament = require("../db.js").Temperament;

const URL = "https://api.thedogapi.com/v1/breeds";

const getDogsTemperaments = async (req, res) => {
 try {
  axios(`${URL}?api_key=${api_key}`).then((response) => {
   const temperaments = response.data
    .map((dog) => {
     return dog.temperament;
    })
    .join(",")
    .split(",")

    const newTemperament= temperaments.map((temperament)=>Temperament.findOrCreate({where:{name:temperament}}))
    return res.status(200).json(newTemperament);
  })

 } catch (error) {
  res.status(500).send(error.message);
 }
};

module.exports = {
 getDogsTemperaments,
};
