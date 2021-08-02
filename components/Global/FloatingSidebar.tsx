import { FacebookLogo, InstagramLogo } from 'phosphor-react'
import React from 'react'
import styles from './FloatingSidebar.module.sass'

const FloatingSidebar = () => {
    return (
        <div className={styles.floating_sidebar}>
            <div className={styles.floating_sidebar_links}>
                <div className={styles.link}>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <FacebookLogo size={24} weight="bold" />
                    </a>
                </div>
                <div className={styles.link}>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <InstagramLogo size={24} weight="bold" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FloatingSidebar
