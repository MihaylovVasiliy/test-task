import logo from "../../assets/logo.svg";
import React from "react";

class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <a href="#" className="header-link">
                    <img
                        src={logo} alt="Логотип ЦВТ" className="header__header-image"/>
                </a>
                <form className="header__header-find">
                    <p className="header__header-find__paragraph">
                        <input className="header__header-find__input" type="text" placeholder="Поиск..."/>
                    </p>
                    <button className="header__header-button"> Найти</button>
                </form>

            </header>
        )
    }
}

export default Header;