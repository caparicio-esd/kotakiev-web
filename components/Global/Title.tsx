import React from "react"
import Image from "next/image"
import mancha from "./../../public/assets/img/mancha.png"
import styles from "./Title.module.sass"

const Title = ({ title }) => {
  return (
    <div className={styles.title}>
      <Image className={styles.picture} src={mancha.src} width={mancha.width} height={mancha.height} />
      <h2 className={styles.content}>{title}</h2>
    </div>
  )
}

export default Title
