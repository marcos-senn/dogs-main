const axios = require("axios");
require("dotenv").config();
const api_key = process.env.API_KEY;

const URL = "https://api.thedogapi.com/v1/breeds";

const getDogs = async (req, res) => {
 try {
  const response = await axios(`${URL}?api_key=${api_key}`);
  const dataResponse = response.data;
  const dogData = dataResponse.map((dog) => {
   return {
    id: dog.id,
    name: dog.name,
    height: dog.height,
    weight: dog.weight,
    life_span: dog.life_span,
    image: dog.image.url,
    temperament: dog.temperament,
   };
  });
  return res.status(200).json(dogData);
 } catch (error) {
  res.status(500).send(error.message);
 }
};

module.exports = {
 getDogs,
};
