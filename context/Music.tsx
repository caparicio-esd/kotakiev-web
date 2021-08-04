import React, { useEffect, useState } from "react"
import { Howl, Howler } from "howler"
import puerto from "./../public/assets/img/puerto.png"
import brabra from "./../public/assets/img/brabra.png"
import mariagsus from "./../public/assets/img/mariagsus.png"
import rafaela from "./../public/assets/img/rafaela.png"
import tucan from "./../public/assets/img/tucan.png"
//@ts-ignore
import sample01 from "./../public/assets/music/sample01.mp3"
//@ts-ignore
import sample02 from "./../public/assets/music/sample02.mp3"
//@ts-ignore
import sample03 from "./../public/assets/music/sample03.mp3"

const originalMusic = [
  {
    title: "BrabraSilSil",
    path: sample01,
    picture: brabra,
    howlerController: null,
  },
  {
    title: "Puerto España",
    path: sample02,
    picture: puerto,
    howlerController: null,
  },
  {
    title: "Tucán con papas trémulas",
    path: sample03,
    picture: tucan,
    howlerController: null,
  },
  {
    title: "Rafaela dos Santos",
    path: sample01,
    picture: rafaela,
    howlerController: null,
  },
  {
    title: "Maria Gsus4",
    path: sample02,
    picture: mariagsus,
    howlerController: null,
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

  useEffect(() => {
    musicTitles.forEach((musicTitle) => {
      musicTitle.howlerController?.stop()
    })
  }, [activeTrack])

  // useEffect(() => {
  //     console.log();
  //     value.musicTitles[value.activeTrack]?.howlerController.play()
  //     console.log(value.musicTitles[value.activeTrack]?.howlerController.playing());
  // })

  return <MusicContext.Provider value={value}>{props.children}</MusicContext.Provider>
}
