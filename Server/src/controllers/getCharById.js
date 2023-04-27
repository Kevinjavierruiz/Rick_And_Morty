let axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (request,response)=>{
    try {
        const {data} = await axios(`${URL}${request.params.id}`)
        
        if(!data.name) throw Error(`faltan datos del personaje con ID: ${request.params.id}`)
        
        let character = {id:data.id,name:data.name,species:data.species,origin:data.origin,image:data.image,gender:data.gender}
        return response.status(200).json(character);
        
    } catch (error) {
        return error.message.includes("ID") 
        ? response.status(404).send(error.message) 
        : response.status(500).send(error.response.data.error)
    }
}

module.exports = {getCharById};