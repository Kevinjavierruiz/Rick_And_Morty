let myFavorites = [];

const postFav = (request,response)=>{
    let character = request.body;
    myFavorites.push(character)
    return response.status(200).json(myFavorites)
}

const deleteFav = (request,response)=>{
    let {id} = request.params;
    myFavorites = myFavorites.filter(character => character.id !== +id)
    return response.status(200).json(myFavorites);
}
module.exports = {
    postFav,
    deleteFav,
}