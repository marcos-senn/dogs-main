const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";

const getDogs = async (req, res) => {
 try {
  axios(`${URL}`)
   .then((response) => {
    return res.status(200).json(response.data)
   })

 } catch (error) {
  res.status(500).send(error.message);
 }
};

module.exports = {
    getDogs,
}