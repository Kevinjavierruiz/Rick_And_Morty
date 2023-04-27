import './Nav.css'
import React from 'react';
import SearchBar from "../SearchBar";
import { NavLink } from 'react-router-dom';
const Nav= ({onSearch})=>{
    return(
        <nav className={'navContainer'}>
            <div className='container-button-home'>
                <NavLink to="/home">
                    <button className='button-home'>Home</button>
                </NavLink>
            </div>
            <div className='container-button-favorites'>
                <NavLink to="/favorites">
                    <button className='button-favorite'>Favorite</button>
                </NavLink>
            </div>
            <div className='container-button-about'>
                <NavLink to="/about">
                    <button className='button-about'>About</button>
                </NavLink>
            </div>
            <div className={'nav-container-searchBar'}>
                <SearchBar onSearch={onSearch} />
            </div>

        </nav>
    );
    
}
export default Nav;