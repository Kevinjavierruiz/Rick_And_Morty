import React from 'react';
import './about.css'
export default function About(){
    return(
        <div className='container-about'>
            <div className='container-all'>
                <div className='container-about-title'>
                    <h1>Kevin Javier Ruiz Diaz</h1>
                    <img src="https://w7.pngwing.com/pngs/347/642/png-transparent-facebook-social-media-councillor-okehampton-anonymous-silhouette-anonymous-logos.png" alt="kevin javier ruiz diaz" style={{height:"100px"}} />
                </div>
                <div className='container-about-cv'>
                    <div className='container-perfil'>
                        <h3>Perfil</h3>
                        <h4>Contacto</h4>
                        <p>+541153891659</p>
                        <h3>E-mail</h3>
                        <p>ruizdiazkevinjavier270@gmail.com</p>
                    </div>
                    <div className='container-skills'>
                        <h3>Lenguajes de Programación</h3>
                        <p>Javascript</p>
                        <p>Python</p>
                        <p>C</p>
                        <h3>habilidades</h3>
                        <p>CSS</p>
                        <p>HTML</p>
                        <p>React</p>
                        <p>Redux</p>
                        <p>Git</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}