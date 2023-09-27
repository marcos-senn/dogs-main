const axios = require('axios');
require('dotenv').config();
const api_key = process.env.API_KEY;
const URL = 'https://api.thedogapi.com/v1/breeds'


   //Obtener dogs de API
    const getDogById =  (req, res) => {
        const {id} = req.params
        try {
            axios(`${URL}/${id}?api_key=${api_key}`)
            .then((response) => response.data)
            .then(({ id, name, height, weight, life_span, image, temperament }) => {
            if(name){
                let dog = {
                id,
                name,
                height,
                weight,
                life_span,
                image,
                temperament,
                };
                return res.status(200).json(dog);
            }
            return res.status(200).json({message: "Not found"})});
            
        } catch (error) {
          res.status(500).send(error.message);
        }
    }

    module.exports = {getDogById}