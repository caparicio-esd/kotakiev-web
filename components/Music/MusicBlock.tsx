import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import styles from './MusicBlock.module.sass'
import { Pause, Play } from 'phosphor-react'
import MusicBlockSeeker from './MusicBlockSeeker'
import { MusicContext } from '../../context/Music'

const MusicBlock = ({ musicTitle, musicTrack }) => {
    const musicContext = useContext(MusicContext)
    const isPlaying = musicContext.isPlaying
    const isThisTrackPlaying = musicContext.activeTrack === musicTrack

    const setPlaying = (isPlaying_) => {
        if (isThisTrackPlaying) {
            musicContext.setActiveTrack(-1)
            musicContext.setIsPlaying(false)
            musicContext.musicTitles[musicTrack].howlerController.stop()
        } else {
            musicContext.setActiveTrack(musicTrack)
            musicContext.setIsPlaying(true)
            musicContext.musicTitles[musicTrack].howlerController.play()
        }
    }

    const getSeeker = (isPlaying_) => {
        if (isPlaying_) {
            return <MusicBlockSeeker {...musicTitle} musicTrack={musicTrack} />
        } else {
            return null
        }
    }
    const getControls = (isPlaying_) => {
        if (isPlaying_) {
            return <Pause size={38} weight="bold" />
        } else {
            return <Play size={38} weight="bold" />
        }
    }
    return (
        <div className={styles.music_block}>
            <div className={styles.music_block_picture}>
                <Image src={musicTitle.picture.src} layout="fill" />
            </div>
            <div className={styles.music_block_title}>{musicTitle.title}</div>
            <div className={styles.music_block_seek}>{getSeeker(isThisTrackPlaying)}</div>
            <div className={styles.music_block_control} onClick={() => setPlaying(isPlaying)}>
                {getControls(isThisTrackPlaying)}
            </div>
        </div>
    )
}

export default MusicBlock
