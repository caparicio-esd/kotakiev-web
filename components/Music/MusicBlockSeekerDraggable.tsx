import React, { useContext, useEffect, useRef, useState } from 'react'
import interact from 'interactjs'
import { MusicContext } from '../../context/Music'

const MusicBlockSeekerDraggable = (props) => {
    const musicContext = useContext(MusicContext)
    const { howlerController } = musicContext.musicTitles[props.musicTrack]
    const duration = howlerController.duration()
    const ref = useRef(null)
    let parentWidth = 0;

    useEffect(() => {
        interact(ref.current).draggable({
            listeners: {
                start(ev: Interact.DragEvent) {
                    const target: HTMLElement = ev.target as HTMLElement
                    const rect: DOMRect = (target.parentNode as HTMLElement).getBoundingClientRect()
                    parentWidth = rect.width;
                    howlerController.pause()
                    props.setShowDotHint(true)
                },
                move(ev: Interact.DragEvent) {   
                    const deltaDuration = duration / parentWidth                            
                    props.seekTo(howlerController.seek() + ev.delta.x * deltaDuration, false)
                },
                end(ev: Interact.DragEvent) {
                    props.seekTo(howlerController.seek(), true)
                    props.setShowDotHint(false)
                }
            },
            modifiers: [
                interact.modifiers.restrict({
                    restriction: 'parent',
                    endOnly: true
                })
            ],
        })
    }, [])

    return (
        <div className="draggable" ref={ref}>
            {props.children}
        </div>
    )
}

export default MusicBlockSeekerDraggable
