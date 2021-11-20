import React, { useContext } from 'react'
import { MusicContext } from '../../context/Music'
import MusicBlock from './MusicBlock'
import MusicVideoBlock from './MusicVideoBlock'

const MusicContainer = () => {
    const { musicTitles } = useContext(MusicContext)
    return (
        <>
            <div className="music_container">
                {musicTitles.filter(mt => !mt.isVideo).map((musicTitle, i) => (
                    <MusicBlock key={i} musicTrack={i} musicTitle={musicTitle} />
                ))}
            </div>
            <div className="music_videos">
                {musicTitles.filter(mt => mt.isVideo).map((musicTitle, i) => (
                    <MusicVideoBlock key={i} videoTrack={i} musicTitle={musicTitle} />
                ))}
            </div>
        </>
    )
}

export default MusicContainer
