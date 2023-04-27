import {ADD_FAV,REMOVE_FAV,FILTER,ORDER} from './actionsType';
const initialState = {
    myFavorites:[],
    allCharacters:[],
}
// order = num.sort((a,b)=> {
//     if(a.id < b.id) return -1;
//     else if(a.id > b.id) return 1;
//     else return 0;
// })
const reduce = (state=initialState,action)=>{
    switch(action.type){
        case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };
            case REMOVE_FAV:
                return { ...state, myFavorites: action.payload , allCharacters:action.payload};
            case FILTER:
                if(action.payload === "All") return {...state,myFavorites:state.allCharacters}
                else{
                    let filtrado = state.allCharacters.filter(character => character.gender === action.payload)
                    return {...state,myFavorites: filtrado};
                }
            case ORDER:
                let ordenamiento=[];
                if(action.payload === "A"){
                    ordenamiento= state.allCharacters.sort((a,b)=> {
                        if(a.id < b.id) return -1;
                        else if(a.id > b.id) return 1;
                        else return 0;
                    })
                    return {...state,myFavorites:ordenamiento}
                }
                else if( action.payload === "D"){
                    ordenamiento =state.allCharacters.sort((a,b)=> {
                        if(a.id < b.id) return 1;
                        else if(a.id > b.id) return -1;
                        else return 0;
                    })
                    return {...state,myFavorites:ordenamiento}
                }
        default:
            return {...state}
    }
}
export default reduce;