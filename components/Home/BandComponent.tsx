import React from 'react'
import styles from './BandComponents.module.sass'
import Image from 'next/image'
import { FacebookLogo, InstagramLogo } from 'phosphor-react'

const BandComponent = ({ name, type, social, picture }) => {
    const getSocial = (social) => {
        if (social.includes("facebook")) {
            return <FacebookLogo width={25} weight="bold" />
        } else if (social.includes("instagram")) {
            return <InstagramLogo width={25} weight="bold" />
        } else {
            return null
        }
    }

    return (
        <div className={styles.band_component}>
            <div className={styles.picture}>
                <Image src={picture?.src} alt={name} layout="fill" />
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <div className={styles.type}>{type}</div>
                <div className={styles.social}>
                    <a href={social}>{getSocial(social)}</a>
                </div>
            </div>
        </div>
    )
}

export default BandComponent
