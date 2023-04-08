import React from 'react';
import { useState } from 'react';
import validation from '../validation';
const Form = ({login})=>{
    const [userData,setUserData] = useState({email:"",password:""});
    const [errors,setErrors] = useState({email:"",password:""})
    const handleChange = (evento) =>{
        setUserData({...userData,[evento.target.name]: evento.target.value})
        setErrors(validation({...userData,[evento.target.name]:evento.target.value}));
    } 
    function handleSubmit(evento){
        evento.preventDefault();
        login(userData);
    }
    return(
        <form action="">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" placeholder='Escribe tu email' value={userData.email} onChange={handleChange}/>
            {errors.email ? <p>{errors.email}</p>:""}
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" placeholder='Escribe tu contraseña' value={userData.password} onChange={handleChange}/>
            {errors.password ? <p>{errors.password}</p>:""}
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}
export default Form;