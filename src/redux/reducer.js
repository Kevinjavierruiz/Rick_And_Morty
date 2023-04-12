import {ADD_FAV,REMOVE_FAV} from './actionsType';
const initialState = {
    myFavorites:[]
}
const reduce = (state=initialState,action)=>{
    switch(action.type){
        case ADD_FAV:
            return {...state,myFavorites:[...state.myFavorites,action.payload]};
        case REMOVE_FAV:
            return {...state,myFavorites:state.myFavorites.filter((character)=> character.id !== action.payload)}
        default:
            return {...state}
    }
}
export default reduce;