import React, { useContext } from 'react'
import { MusicContext } from '../../context/Music'
import MusicBlock from './MusicBlock'

const MusicContainer = () => {
    const { musicTitles } = useContext(MusicContext)
    return (
        <div className="music_container">
            {musicTitles.map((musicTitle, i) => (
                <MusicBlock key={i} musicTrack={i} musicTitle={musicTitle} />
            ))}
        </div>
    )
}

export default MusicContainer
