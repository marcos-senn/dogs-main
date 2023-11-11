const axios = require("axios");
require("dotenv").config();
const api_key = process.env.API_KEY;
const URL = "https://api.thedogapi.com/v1/breeds";
const { Dog, Temperament } = require("../db.js");

const regex = /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/;

//Obtener dogs de API
const getDogById = async (req, res) => {
    try {
        const { id } = req.params;
        if (regex.test(id)) {
            const dogDb = await Dog.findOne({
                where: { id: id },
                include: {
                    model: Temperament,
                    attributes: ["name"],
                    through: { attributes: [] }, 
                },
            });

            if (!dogDb) return res.status(200).json({ message: "Not found" });

            return res.status(200).json(dogDb);
        } else {
            const apiResponse = await axios(`${URL}/${id}?api_key=${api_key}`);
            const { name } = apiResponse.data;
            if (name) {
                const {
                    id,
                    name,
                    height,
                    weight,
                    life_span,
                    reference_image_id,
                    temperament,
                } = apiResponse.data;

                const dog = {
                    id,
                    name,
                    height: height.metric,
                    weight: weight.metric,
                    life_span,
                    image: `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`,
                    temperament,
                };
                return res.status(200).json(dog);
            }
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getDogById };
