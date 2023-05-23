const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {

    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);
    if (!data.name) throw Error(`ID: ${id} not found`);
    const character = {
      id: data.id,
      name: data.name,
      species: data.species,
      origin: data.origin,
      status: data.status,
      gender: data.gender,
      image: data.image
    };
    return res.status(200).json(character);

  } catch (error) {
    return error.message.includes('ID') ? res.status(400).send(error.message) : res.status(500).send(error.response.data.error);
  }
};

module.exports = {
  getCharById,
};
