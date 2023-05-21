const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character'

const getCharById = (req, res) => {
    const { id } = req.params;
    axios(`${URL}/${id}`)
    .then(response => response.data)
    .then(({status, name, species, origin, gender, image}) => {
        if(name) {
            const character = {
                id,
                name,
                species,
                origin,
                status,
                gender,
                image
            };

            return res.status(200).json(character);
        }

        return res.status(404).send('Not found');
    })
    .catch(error => {
        res.status(500).send(error.message);
    })
}

module.exports = {
    getCharById
}