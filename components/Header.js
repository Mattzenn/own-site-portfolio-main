import React from "react";
// import {Link} from "react-scroll";
import Link from "next/link";

export default function Header() {

    const [isEditPopupOpen, setEditPopupOpen] = React.useState(false);

    function handlePopupOpenClick() {
        setEditPopupOpen(true)
    }

    function handlePopupCloseClick() {
        setEditPopupOpen(false)
    }

    return (
        <header className="header" id="header">
            <a className="header__logo" href="/#header">&lt; MZ/ &gt;</a>
            <div className="header__button-container">
                <a className="header__button"  href="/#aboutme" smooth={true} duration={1000}>Обо мне</a>
                <a className="header__button" href="/#info">Опыт в IT</a>
                <a className="header__button" href="/#portfolio">Проекты</a>
                <a className="header__button" href="/#feedback">Рекомендации</a>
                <a className="header__button header__button_type_blue" href="/#calltoactionbox">Связаться со мной</a>
            </div>

            <div className="burger-box">
                <div className="burger">
                    <div className="burger-menu">
                        <a href="#" className={`burger-menu__button ${isEditPopupOpen ? 'burger-menu_active' : ''}`} onClick={isEditPopupOpen ? handlePopupCloseClick : handlePopupOpenClick}></a>
                    </div>
                </div>

                <nav className= {`burger-menu__nav ${isEditPopupOpen ? 'burger-menu__nav_active' : ''}`}>
                    <a className="burger-menu__navbutton" href="#aboutme" onClick={isEditPopupOpen ? handlePopupCloseClick : handlePopupOpenClick}>Обо мне</a>
                    <a className="burger-menu__navbutton" href="#info" onClick={isEditPopupOpen ? handlePopupCloseClick : handlePopupOpenClick}>Опыт в IT</a>
                    <a className="burger-menu__navbutton" href="#portfolio" onClick={isEditPopupOpen ? handlePopupCloseClick : handlePopupOpenClick}>Проекты</a>
                    <a className="burger-menu__navbutton" href="#feedback" onClick={isEditPopupOpen ? handlePopupCloseClick : handlePopupOpenClick}>Рекомендации</a>
                    <a className="burger-menu__navbutton header__button_type_blue" href="#calltoactionbox" onClick={isEditPopupOpen ? handlePopupCloseClick : handlePopupOpenClick}>Связаться со мной</a>
                </nav>
            </div>
        </header>
    )
}