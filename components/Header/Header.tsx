import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <div className="header_brand">
                <div className="logo"></div>
            </div>
            <div className="header_menu">
                <ul>
                    <li>
                        <a href="#">Conócenos</a>
                    </li>
                    <li>
                        <a href="#">Música</a>
                    </li>
                    <li>
                        <a href="#">Conciertos</a>
                    </li>
                    <li>
                        <a href="#">Merch</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </div>
            <div className="header_lang_switcher">
                <div className="lang active">ES</div>
                <div className="lang">EN</div>
            </div>
        </header>
    )
}

export default Header
