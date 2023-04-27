import { connect } from "react-redux";
import Card from "../Card/Card";
import { filterCards,orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import React from 'react'
import './Favorites.css';
function Favorite({myFavorites}){
    const [aux,setAux] = React.useState(false);
    const dispatch= useDispatch();
    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    }
    const handleFilter=(event)=>{
        dispatch(filterCards(event.target.value));
    }
    return(
        <div className="container-favorites">
            <div className="image-rick"></div>
            <div className="container-selectBox">
                <select onChange={handleOrder} className="select-option-order">
                    <option value="A">Ascendente</option>
                    <option value="D" >Descendente</option>
                </select>
                <select onChange={handleFilter} className="select-option-filter">
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <div className="container-cards-favorites">
                {myFavorites&&myFavorites.map(character => <Card key={character.id}id={character.id} name={character.name} status={character.status} species={character.species} gender={character.gender} origin={character.origin} image={character.image} ></Card>)}
            </div>
        </div>
    );
}

const mapStateToProps=(state)=>{
    return{myFavorites:state.myFavorites};
}
export default connect(mapStateToProps,null)(Favorite);