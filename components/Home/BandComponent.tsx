import React from 'react'
import styles from './BandComponents.module.sass'

const BandComponent = ({name, type, social, picture}) => {
    return (
        <div className={styles.band_component}>
            <div className={styles.picture}>
                <img src={picture?.src} alt={name} />
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <div className={styles.type}>{type}</div>
                <div className={styles.social}>{social}</div>
            </div>
        </div>
    )
}

export default BandComponent