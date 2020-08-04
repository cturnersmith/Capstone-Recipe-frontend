import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
	return(
		<header className="site-header">
			<div className="row align-middle align-justify">
				<h1 className="site-header--logo">Buzy Mom Recipes</h1>
                {props.loggedIn ? 
                <ul className="site-header--menu">
                <li><NavLink to='/recipes'>Recipes</NavLink></li>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/aboutus'>About Us</NavLink></li>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/logout'>Logout</NavLink></li>
            </ul>
            : 
            <ul className="site-header--menu">
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/register'>Register Here</NavLink></li>
                    <li><NavLink to='/aboutus'>About Us</NavLink></li>
                    <li><NavLink to='/'>Home</NavLink></li>
                </ul>
                }


                
				
				
		    </div>
		</header>
	);
};

export default Header;