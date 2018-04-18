import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
    <header>
        <div className= "logo">
        LoGo
        </div>

        <nav>
            <ul>
                <li className= 'First'>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/Signin"> Log In </Link>
                </li>
                <li className="last">
                    <Link to="/Discover"> Discover </Link>
                </li>
            </ul>
        </nav>

    </header>
        );
    }
}

export default Header;
