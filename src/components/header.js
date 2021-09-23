import React from 'react';
import "../style/header.css";
import logo from "../img/gazzetta.png";

const Header = () => {
    return(
        <div class="header">
            <div class="navTitle">
                <a href="/">
                    <img src={logo} alt="logo" style={{width: "330px"}}/>
                </a>
            </div>
            <div class="menu">
                <a class="menu-element" href="/squadre">Le Squadre</a>
                <a class="menu-element" href="/">News</a>
                <a class="menu-element" href="/classifica">Classifica</a>
                <a class="menu-element" href="/sbancatotore">Sbancatotore</a>
            </div>
        </div>
    )
}

export default Header;