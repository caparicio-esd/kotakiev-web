import React, { useContext, useEffect, useState } from "react"
import { MusicContext } from "../../context/Music"
import MusicBlockSeekerDraggable from "./MusicBlockSeekerDraggable"
import styles from "./MusicBlock.module.sass"

const MusicBlockSeeker = ({ musicTitle, musicTrack }) => {
  const musicContext = useContext(MusicContext)
  const [seek, setSeek] = useState(0)
  const { howlerController } = musicContext.musicTitles[musicTrack]
  const duration = howlerController.duration()

  useEffect(() => {
    let intervalId = setInterval(() => {
      setSeek(howlerController.seek())
    }, 10)
    howlerController.once("end", () => {
      clearInterval(intervalId)
    })
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const getProgressWidth = (seek_) => ({
    width: `${getDateFraction(seek_)}%`,
  })
  const getProgressPosition = (seek_) => ({
    left: `${getDateFraction(seek_)}%`,
  })
  const getDateFraction = (seek) => (seek * 100) / duration
  const getDateString = (timeInSeconds) => {
    const date = new Date(timeInSeconds * 1000)
    return `${prependZero(date.getMinutes())}:${prependZero(date.getSeconds())}`
  }
  const getEllapsedTime = (seek) => getDateString(seek)
  const getLeftTime = (seek) => getDateString(duration - seek)
  const prependZero = (num) => (num <= 9 ? `0${num}` : `${num}`)
  const seekTo = () => {
    console.log("seek...")
  }

  return (
    <div className={styles.music_block_seeker}>
      <div className={styles.seek_time}>{getDateString(seek)}</div>
      <div className={styles.bar}>
        <div className={styles.bg_bar}></div>
        <div className={styles.loading_bar}></div>
        <div className={styles.progress_bar} style={{ ...getProgressWidth(seek) }}></div>
        <MusicBlockSeekerDraggable seekTo={seekTo} musicTrack={musicTrack}>
          <div className={styles.progress_dot} style={{ ...getProgressPosition(seek) }}></div>
        </MusicBlockSeekerDraggable>
        <div className={styles.progress_dot_hint} style={{ ...getProgressPosition(seek) }}>
          {seek}
        </div>
      </div>
      <div className={styles.time_last}>{getLeftTime(seek)}</div>
    </div>
  )
}

export default MusicBlockSeeker
