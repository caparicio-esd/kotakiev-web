import React from 'react'

const MusicBlock = ({musicTitle}) => {

    const getSeeker = (howlerInstance) => {
        return "seeker"
    }
    const getControls = (howlerInstance) => {
        return "controls"
    }
    return (
        <div className="music_block">
            <div className="music_block_picture">
                <img src="#" alt="" />
            </div>
            <div className="music_block_title">{musicTitle.title}</div>
            <div className="music_block_seek">{getSeeker(musicTitle.howler)}</div>
            <div className="music_block_control">{getControls(musicTitle.howler)}</div>
        </div>
    )
}

export default MusicBlock
