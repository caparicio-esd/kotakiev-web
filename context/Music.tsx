import React, { useEffect, useState } from 'react'
import { Howl, Howler } from 'howler'
import puerto from './../public/assets/img/puerto.png'
import brabra from './../public/assets/img/brabra.png'
import mariagsus from './../public/assets/img/mariagsus.png'
import rafaela from './../public/assets/img/rafaela.png'
import tucan from './../public/assets/img/tucan.png'
import sample01 from './../public/assets/music/sample01.mp3'
import sample02 from './../public/assets/music/sample02.mp3'
import sample03 from './../public/assets/music/sample03.mp3'

const originalMusic = [
    {
        title: 'BrabraSilSil',
        path: sample01,
        picture: brabra,
        howlerController: null,
        isVideo: false
    },
    {
        title: 'Puerto España',
        path: sample02,
        picture: puerto,
        howlerController: null,
        isVideo: false
    },
    {
        title: 'Tucán con papas trémulas',
        path: sample03,
        picture: tucan,
        howlerController: null,
        isVideo: false
    },
    {
        title: 'Rafaela dos Santos',
        path: sample01,
        picture: rafaela,
        howlerController: null,
        isVideo: false
    },
    {
        title: 'Maria Gsus4',
        path: sample02,
        picture: mariagsus,
        howlerController: null,
        isVideo: false
    },
    {
        title: 'Jabalcón',
        path: sample02,
        picture: mariagsus,
        howlerController: null,
        isVideo: true
    },
]

export const MusicContext = React.createContext(undefined)

export const MusicContextProvider = (props) => {
    const [musicTitles, setMusicTitles] = useState(originalMusic)
    const [isPlaying, setIsPlaying] = useState(false)
    const [activeTrack, setActiveTrack] = useState(-1)
    const value = {
        musicTitles,
        isPlaying,
        setIsPlaying,
        activeTrack,
        setActiveTrack,
    }
    /**
     * add howler controller to each
     */
    useEffect(() => {
        const musicTitles_ = musicTitles.map((musicTitle, i) => {
            return {
                ...musicTitle,
                howlerController: new Howl({
                    src: musicTitle.path,
                    html5: true,
                }),
            }
        })
        setMusicTitles(musicTitles_)
    }, [])

    // stop each song on change active track
    // TODO: refactor this to not stop each song, but the last active
    useEffect(() => {
        musicTitles.forEach((musicTitle) => {
            musicTitle.howlerController?.stop()
        })
    }, [activeTrack])

    return <MusicContext.Provider value={value}>{props.children}</MusicContext.Provider>
}
