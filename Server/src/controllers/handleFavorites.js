let myFav = [];

const postFav = (req, res) => {
    const character = req.body;
    myFav.push(character);
    
    return res.status(200).json(myFav);
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    const myFav = myFav.filter(character => character.id !== +id);

    return res.status(200).json(myFav);
}

module.exports = {
    postFav,
    deleteFav
}