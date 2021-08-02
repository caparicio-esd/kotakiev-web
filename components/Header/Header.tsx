import React, { useContext, useState } from 'react'
import styles from './Header.module.sass'
import { NavigationContext } from '../../context/Navigation'
import { LanguageContext } from '../../context/Language'
import logo from '../../public/assets/img/logo.svg'

const Header = () => {
    const menuItems = useContext(NavigationContext)[0]
    const [langs] = useContext(LanguageContext)

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header_holder}>
                    <div className={styles.header_brand}>
                        <div className={styles.logo}>
                            <img src={logo.src} width={logo.width} alt="logo" />
                        </div>
                    </div>
                    <div className={styles.header_menu}>
                        <ul>
                            {menuItems.map((mItem, i) => (
                                <li key={i}>
                                    <a href="#">{mItem}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.header_lang_switcher}>
                        <ul>
                            {langs.map((lang, i) => (
                                <li className={[styles.lang].join(' ')} key={i}>
                                    <a href="#">{lang}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
