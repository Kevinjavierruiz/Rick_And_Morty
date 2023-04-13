import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {addFav,removeFav} from '../redux/actions';
import { connect, useDispatch } from 'react-redux';
function Card({id,name,status,species,gender,origin,image,onClose,addFav,removeFav,myFavorites}) {
   let [isFav,setIsFav]=useState(false);
   const handleFavorite=()=>{
      if(isFav === true){
         setIsFav(false);
         removeFav(id);
      }
      else{
         setIsFav(true);
         addFav({id,name,status,species,gender,origin,image,onClose})
      }
   }
   useEffect(() => {
      for(let i = 0; i < myFavorites.length;i++){
         if(id === myFavorites[i].id){
            setIsFav(true);
         }
      }
   }, [myFavorites]);
   return (
      <div>
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
         }
         
         <button onClick={()=> {
            onClose(id);
            removeFav(id);}}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{id}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='name' />
      </div>
   );
}

const mapDispatchToProps = (dispatch)=>{
   return {
      addFav: (character)=>{
         dispatch(addFav(character));
      },
      removeFav: (id)=>{dispatch(removeFav(id));
      },
   };
}
const mapStateToProps= (state)=>{return {myFavorites:state.myFavorites}}
export default connect(mapStateToProps,mapDispatchToProps)(Card);