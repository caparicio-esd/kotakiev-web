import React, { useEffect, useState } from 'react'
import {Howl, Howler} from 'howler';

const originalMusic = [
    {
        title: "BrabraSilSil",
        path: "/assets/music/brabra.mp3",
        picture: null,
        howlerController: null
    }, {
        title: "Puerto España",
        path: "/assets/music/puerto.mp3",
        picture: null,
        howlerController: null
    }, {
        title: "Tucán con papas trémulas",
        path: "/assets/music/tucan.mp3",
        picture: null,
        howlerController: null
    }, {
        title: "Rafaela dos Santos",
        path: "/assets/music/rafaela.mp3",
        picture: null,
        howlerController: null
    }, {
        title: "Maria Gsus4",
        path: "/assets/music/mariagsus.mp3",
        picture: null,
        howlerController: null
    },
]

export const MusicContext = React.createContext(undefined)

export const MusicContextProvider = (props) => {
    const [musicTitles, setMusicTitles] = useState(originalMusic)
    const [isPlaying, setIsPlaying] = useState(false)
    const [activeTrack, setActiveTrack] = useState(-1)
    const value = { musicTitles, isPlaying, setIsPlaying, activeTrack, setActiveTrack }

    useEffect(() => {
        const musicTitles_ = musicTitles.map((musicTitle, i) => {
            return {
                ...musicTitle, 
                howlerController: new Howl({
                    src: musicTitle.path
                })
            }
        })
        setMusicTitles(musicTitles_)
    }, [])

    return (
        <MusicContext.Provider value={value}>
            {props.children}
        </MusicContext.Provider>
    )
}
