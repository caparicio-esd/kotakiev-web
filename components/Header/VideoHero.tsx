import React from 'react'
import YouTube from 'react-youtube'
import styles from './VideoHero.module.sass'

const VideoHero = () => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
            modestbranding: 1,
            showinfo: 0,
        },
    }
    const _onReady = () => {
        console.log('youtube ready')
    }
    return (
        <div className={styles.hero}>
            <YouTube videoId="2g811Eo7K8U" {...opts} onReady={_onReady} />
        </div>
    )
}

export default VideoHero
