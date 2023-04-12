import './App.css';
import React,{useState} from 'react';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from "axios";
import About from './components/About'
import Detail from './components/Detail';
import { useNavigate,Route, Routes,useLocation} from 'react-router-dom';
import Form from './components/Form';
import { useEffect } from 'react';
import Favorite from './components/Favorites';
const URL="https://be-a-rym.up.railway.app/api/character";
const apiKey="ff65bd57beea.16694971664382fb33e7";
const EMAIL = "ruizdiazkevinjavier270@gmail.com";
const PASSWORD = "kevin210";
//URL de swagger henry https://be-a-rym.up.railway.app/api/docs/#/character/getCharacters
function App() {
   let [characters,setCharacters] = useState([]);
   let [access,setAccess] = useState(false);
   let navigate=useNavigate();
   function onSearch(id) {
      axios(`${URL}/${id}?key=${apiKey}`).then(({data}) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } 
         else{
            alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(id){
      const filtro = [];
      characters.forEach(element => {
         if(element.id !== id) filtro.push(element);
      })
      setCharacters(filtro);
   }
   function login(userData){
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate("/home")
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   return (
      <div className='App'>
         {useLocation().pathname !== '/' ? <Nav onSearch={onSearch}/> : ''}
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}>
            </Route>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path='/' element={<Form login={login} />}></Route>
            <Route path='/favorites' element={<Favorite/>}/>
         </Routes>
      </div>
   );
}

export default App;
