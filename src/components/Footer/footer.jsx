import HtcLogo from "../../assets/htc-cs-logo.svg";
import React from "react";

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="footer-container">
                <a className="footer-container__logo" href="https://htc-cs.ru/">
                    <img src={HtcLogo} alt="Логотип ЦВТ" width="32" height="64"/>
                </a>
                <address className="footer-container__information">
                    <p className="footer-container__information_address">426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла
                        Маркса, 246 (ДК «Металлург»)</p>
                    <p className="footer-container__information_phones">+7 <span>(3412)</span> 93-88-61, 43-29-29</p>
                    <a className="footer-container__information_website" href="https://htc-cs.ru/">htc-cs.ru</a>
                </address>
            </div>
        </footer>
    )
}

export default Footer;