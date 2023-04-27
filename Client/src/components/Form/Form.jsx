import React from 'react';
import { useState } from 'react';
import validation from '../../validation';
import './Form.css'
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
        <div className='container-container-form'>
            <form action="" className={"container-form"}>
                <div className='container-form-input'>
                    <h1>Inicio de sesión</h1>
                    <label htmlFor="email" className='email'>Email:</label>
                    <input type="text" id={errors.email ? 'email' : ""} name="email" placeholder='Escribe tu email' value={userData.email} onChange={handleChange} className='email'/>
                    <br />
                    <label htmlFor="password" className='password'>Password:</label>
                    <input type="password" name="password" id={errors.password ? "password" : ""} placeholder='Escribe tu contraseña' value={userData.password} onChange={handleChange} className='password'/>
                    {errors.email ? <p className='errors'>{errors.email}</p>:""}
                    {errors.password ? <p className='errors'>{errors.password}</p>:""}
                    <br />
                    <div className='recordarCuenta'>¿Has olvidado tu contraseña?</div>
                    <button onClick={handleSubmit}>Submit</button>
                    <div className='crearCuenta'><a href="#">Crear una cuenta</a></div>
                </div>
            </form>
        </div>
        )
}
export default Form;