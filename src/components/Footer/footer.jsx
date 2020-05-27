import HtcLogo from "../../assets/htc-cs-logo.svg";
import React from "react";

const Footer = () =>{
    return(
        <footer>
            <img
                src={HtcLogo} alt="logo"/>
            <p> 426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</p>
            <p> +7 (3412) 93-88-61, 43-29-29</p>
            <a href="http://htc-cs.ru"> htc-cs.ru</a>
        </footer>
    )
}

export default Footer;