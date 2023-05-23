let myFav = [];

const postFav = (req, res) => {
    const character = req.body;
    const characterExists = myFav.some((favCharacter) => favCharacter.id === character.id);
  
    if (!characterExists) {
        myFav.push(character);
    }
    return res.status(200).json(myFav);
  };

const deleteFav = (req, res) => {
    const { id } = req.params;
    const myFavFilter = myFav.filter(character => character.id !== id);

    return res.status(200).json(myFavFilter);
}

module.exports = {
    postFav,
    deleteFav
}