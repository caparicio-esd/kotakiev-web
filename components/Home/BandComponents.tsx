import React from 'react'
import BandComponent from './BandComponent'
import styles from './BandComponents.module.sass'
import carlosPicture from './../../public/assets/img/carlos.png'
import brunoPicture from './../../public/assets/img/bruno.png'
import pinPicture from './../../public/assets/img/pin.png'
import ninaPicture from './../../public/assets/img/nina.png'
import marioPicture from './../../public/assets/img/mario.png'

const BandComponents = () => {
    return (
        <div className={styles.band_components}>
            <BandComponent
                name="Mario Matobella"
                picture={marioPicture}
                type="Bajo eléctrico"
                social="http://facebook.com/mario" />
            <BandComponent
                name="Nina Ivanovic"
                picture={ninaPicture}
                type="Saxo Barítono"
                social="" />
            <BandComponent
                name="Miguel Pinedo"
                picture={pinPicture}
                type="Saxo Alto"
                social="" />
            <BandComponent
                name="Bruno Stacchiotti"
                picture={brunoPicture}
                type="Batería"
                social="" />
            <BandComponent
                name="Carlos Aparicio"
                picture={carlosPicture}
                type="Teclados"
                social="" />
        </div>
    )
}

export default BandComponents
