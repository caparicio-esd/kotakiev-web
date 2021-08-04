import React, { useState } from "react"

export const YouTubeContext = React.createContext(undefined)

export const YouTubeContextProvider = (props) => {
  const [youTubeTrack, setYouTubeTrack] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const value = { youTubeTrack, isPlaying, setIsPlaying }

  return <YouTubeContext.Provider value={value}>{props.children}</YouTubeContext.Provider>
}
