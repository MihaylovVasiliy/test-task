import logo from "../../assets/logo.svg";
import React from "react";

const Header = () => {
    return(
    <header className="header">
        <img
            src={logo} alt="logo" className="header__header-image"/>
        <form name="header__header-find">
            <p className="header__header-find__paragraph">
                <input type="text" placeholder="Поиск..." />
            </p>
        </form>
        <button className="find-button"> Найти</button>
    </header>
    )
}

export default Header;