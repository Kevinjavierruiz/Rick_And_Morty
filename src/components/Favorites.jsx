import { connect } from "react-redux";
import Card from "./Card";
function Favorite({myFavorites}){
    return(
        <div>
            
            {myFavorites&&myFavorites.map(character => <Card key={character.id}id={character.id} name={character.name} status={character.status} species={character.species} gender={character.gender} origin={character.origin} image={character.image} ></Card>)}
        </div>
    );
}

const mapStateToProps=(state)=>{
    return{myFavorites:state.myFavorites};
}
export default connect(mapStateToProps,null)(Favorite);