import './App.css';
import React,{useState} from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from "axios";
import About from './components/About'
import Detail from './components/Detail';
import { Route, Routes} from 'react-router-dom';
const URL="https://be-a-rym.up.railway.app/api/character";
const apiKey="ff65bd57beea.16694971664382fb33e7";
//URL de swagger henry https://be-a-rym.up.railway.app/api/docs/#/character/getCharacters
function App() {
   let [characters,setCharacters] = useState([]);
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         console.log(data.name)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id){
      const filtro = [];
      characters.forEach(element => {
         if(element.id !== parseInt(id)) filtro.push(element);
      })
      setCharacters(filtro);
   }
   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}>
            </Route>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
