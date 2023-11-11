const axios = require("axios");
require("dotenv").config();
const api_key = process.env.API_KEY;

//Modelo Temperament
const Temperament = require("../db.js").Temperament;

const URL = "https://api.thedogapi.com/v1/breeds";

const getDogsTemperaments = async (req, res) => {
    try {
        const apiResponse = await axios(`${URL}?api_key=${api_key}`);
        const apiData = apiResponse.data;

        const temperaments = new Set(
            apiData
                .map(dog => dog.temperament) 
                .join(",") 
                .split(",") 
                .filter((temperament) => temperament.trim().length > 0)
                .sort()
            )
        const newTemperamentPromise = Array.from(temperaments).map((temperament) =>
            Temperament.findOrCreate({ where: { name: temperament.trim() } })
        );
        const newTemperament = await Promise.all(newTemperamentPromise)
        const temperamentsDB = await Temperament.findAll();
        return res.status(200).json(temperamentsDB); 
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getDogsTemperaments,
};
