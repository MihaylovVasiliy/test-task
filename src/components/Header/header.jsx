import logo from "../../assets/logo.svg";
import React from "react";

const Header = () => {
    return(
    <header className="header">
        <img
            src={logo} alt="Логотип ЦВТ" className="header__header-image"/>
        <form name="header__header-find">
            <p className="header header__header-find__paragraph">
                <input className="header header__header-find__input" type="text" placeholder="Поиск..." />
            </p>
        </form>
        <button className="header__header-button"> Найти</button>
    </header>
    )
}

export default Header;