import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const URL="https://be-a-rym.up.railway.app/api/character";
const apiKey="ff65bd57beea.16694971664382fb33e7";
const Detail = ()=>{
    let id=useParams().id;
    let [Character,setCharacter]=useState({});
    useEffect(() => {
        axios(`${URL}/${id}?key=${apiKey}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);
    return(
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