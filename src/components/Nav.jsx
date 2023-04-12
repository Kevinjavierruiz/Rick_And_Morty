import React from 'react';
import SearchBar from "./SearchBar";
import { NavLink } from 'react-router-dom';
const Nav= ({onSearch})=>{
    return(
        <nav>
            <NavLink to="/home">
                <button>Home</button>
            </NavLink>
            <NavLink to="/about">
                <button>About</button>
            </NavLink>
            <NavLink to="/favorites">
                <button>Favorite</button>
            </NavLink>

            <SearchBar onSearch={onSearch} />
        </nav>
    );
    
}
export default Nav;