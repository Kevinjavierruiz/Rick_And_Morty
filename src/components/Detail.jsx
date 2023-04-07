import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const Detail = ()=>{
    let id=useParams().id;
    let [Character,setCharacter]=useState({});
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);
    return(s
        <div>
            {Character.name ?
            (<>
            <h1>{Character.name}</h1>
            <p>STATUS | {Character.status}</p>
            <p>SPECIE | {Character.species}</p>
            <p>GENDER | {Character.gender}</p>
            <p>ORIGIN | {Character.origin.name}</p>
            <img src={Character.image} alt={Character.name} /></>):(<h1>Loading...</h1>)}
        </div>
    )
}
export default Detail;