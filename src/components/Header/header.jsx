import logo from "../../assets/logo.svg";
import React from "react";

const Header = () => {
    return(
    <header className="header">
        <img
            src={logo} alt="logo"/>
        <form name="find">
            <p>
                <input type="text" placeholder="Поиск..."/>
            </p>
        </form>
        <button className="find-button"> Найти</button>
        <button className="enter-button"> Найти</button>
    </header>
    )
}

export default Header;