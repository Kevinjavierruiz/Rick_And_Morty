import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './Detail.css';
const URL="https://be-a-rym.up.railway.app/api/character";
const apiKey="ff65bd57beea.16694971664382fb33e7";
const Detail = ()=>{
    let id=useParams().id;
    let [Character,setCharacter]=useState({});
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } 
           else{
              alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, []);
    return(
        <div className='container-detail'>
            {Character.name ?
            (<div className='container-detail-character'>
            <h1>{Character.name}</h1>
            <hr />
            <img src={Character.image} alt={Character.name} />
            <div className='container-detail-character-complete'>
                <p>STATUS | {Character.status}</p>
                <p>SPECIE | {Character.species}</p>
                <p>GENDER | {Character.gender}</p>
                <p>ORIGIN | {Character.origin.name}</p>
            </div>
            </div>):(<h1>Loading...</h1>)}
        </div>
    )
}
export default Detail;