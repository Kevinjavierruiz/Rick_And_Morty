import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {addFav,removeFav} from '../../redux/actions';
import { connect, useDispatch } from 'react-redux';
import './Card.css'
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
         
         <div className={'container-card'}>
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
            <NavLink className={"link"} to={`/detail/${id}`}>
               <h2 className='name'>{name}</h2>
            </NavLink>
            <img src={image} style={{width:"180px"}} alt='name' />
         </div>
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