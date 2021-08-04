import React, { useContext, useEffect, useRef, useState } from 'react'
import interact from 'interactjs'
import { MusicContext } from '../../context/Music'

const Draggable = (props) => {
    const musicContext = useContext(MusicContext)
    const { howlerController } = musicContext.musicTitles[props.musicTrack]
    const duration = howlerController.duration()
    const ref = useRef(null)
    const [interactable, setInteractable] = useState(null)

    useEffect(() => {
        setInteractable(ref.current)
        console.log(interactable.parentNode);
        

        interact(ref.current)
            .draggable({
                listeners: {
                    start(event) {
                        console.log(event.type, event.target)
                    },
                    move(event) {
                        console.log(event.type, event.target)
                        props.seekTo()
                    },
                },
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: 'parent'
                    })
                ]
            })
    }, [])

    return (
        <div className="draggable" ref={ref}>
            {props.children}
        </div>
    )
}

export default Draggable
