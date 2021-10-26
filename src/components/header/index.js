import React, { useEffect, useState } from 'react';
import NavBar from './navBar';
import './style.css';
import Logo from '../../images/Logo.jpg';
import { NavLink } from 'react-router-dom';
import Search from './search/index';
import axios from 'axios';


function Header() {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:3000/top100Films?')
        .then(response => 
            setItems(response.data)
        );
    }, [])

    return (
        <div className="header">
            <NavLink exact to="/Boovies">
                {/* <img src={Logo} alt="logo" className="logo"/> */}
                <h1><span className='text-success fs-1'>Boo</span>vies</h1>
            </NavLink>
            <div className="navbar-search">
                <NavBar />
                <Search props={items} id={items}/>
            </div>
        </div>
    )
}

export default Header;
