import './App.css';
import React,{useState} from 'react';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from "axios";
import About from './components/About/About'
import Detail from './components/Detail/Detail';
import { useNavigate,Route, Routes,useLocation} from 'react-router-dom';
import Form from './components/Form/Form';
import { useEffect } from 'react';
import Favorite from './components/Favorites/Favorites';
const apiKey="ff65bd57beea.16694971664382fb33e7";
const EMAIL = "ruizdiazkevinjavier270@gmail.com";
const PASSWORD = "kevin210";
//URL de swagger henry https://be-a-rym.up.railway.app/api/docs/#/character/getCharacters
function App() {
   let [characters,setCharacters] = useState([]);
   let [access,setAccess] = useState(false);
   let navigate=useNavigate();
   async function onSearch(id) {
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`) 
         if(data.name) setCharacters((oldChars) => [...oldChars, data]);
         
      } catch (error) {
         alert("no se encuentran personajes con ese ID")
      }
   }
   function onClose(id){
      const filtro = [];
      characters.forEach(element => {
         if(element.id !== id) filtro.push(element);
      })
      setCharacters(filtro);
   }
   async function login(userData) {
      try {
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { email, password } = userData;
         const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         if(access){
            setAccess(access);
            access && navigate('/home');
         }
      } catch (error) {
         alert("el email o contraseña ingresados son incorrectos")
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
