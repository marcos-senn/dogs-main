const axios = require("axios");
require("dotenv").config();
const api_key = process.env.API_KEY;
const URL = "https://api.thedogapi.com/v1/breeds";

//obtener dogbyNAME desde la API
const getDogsByname = async (req, res) => {
 const { name } = req.query;

 try {
  const allDogs = await axios(`${URL}?api_key=${api_key}`);
  let dogFinder = allDogs.data;

  if (name) {
   dogFinder = dogFinder.filter((dog) =>
    dog.name.toLowerCase().includes(name.toLowerCase())
   );
  }
  res.status(200).json(dogFinder);
 } catch (error) {
  res.status(400).send(error.message);
 }
};

module.exports = { getDogsByname };
