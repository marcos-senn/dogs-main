const axios = require('axios');


   
    const getDogById = async (req, res) => {
        try {
            const {id} = req.params;
           await axios(`https://api.thedogapi.com/v1/breeds/${id}`)
            .then((response) => {
                return res.status(200).json(response.data)
            })
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    module.exports = {getDogById}