import { FacebookLogo, InstagramLogo } from 'phosphor-react'
import React from 'react'
import styles from './IntroBand.module.sass'
import tempo from './../../public/assets/img/TEMPO_07 2.png'

const IntroBand = () => {
    return (
        <section className={styles.intro_band}>
            <div className={styles.lead}>
                Kotakiev es una banda de jazz-fusión de Madrid, formada con dos
                objetivos: acercar la música instrumental al público y explorar
                nuevos caminos sonoros a través de la improvisación.
            </div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <p>
                        Esta banda nacida de la inquietud de 5 jóvenes de
                        España, Argentina y Croacia recibe influencias de varios
                        géneros de música negra (jazz, funk, afrobeat...) y rock
                        progresivo, apoyándose en su instrumentación atípica
                        para construir curiosas melodías y paisajes sonoros.{' '}
                    </p>
                    <p>
                        Algunas de sus referencias más directas son bandas
                        contemporaneas de jazz-fusión nacionales e
                        internacionales, como Forastero, Ezra Collective, Nubya
                        García, Sons of Kemet, Snarky Puppy etc.
                    </p>
                    <p>
                        La formación, compuesta por batería, bajo, teclado, saxo
                        alto/tenor y saxo barítono, ofrece un espectáculo
                        sorprendente donde se dan la mano el baile, la
                        experimentación sonora y la improvisación; una
                        experiencia que, sin duda, atrapa y llama atención de un
                        público muy variado.{' '}
                    </p>
                </div>
                <div className={styles.pic}>
                    <img src={tempo.src} alt="" />
                </div>
            </div>
            <div className={styles.footer}>
                <div>Síguenos en redes</div>
                <div className={styles.links}>
                    <div className={styles.link}>
                        <a href="#">
                            <FacebookLogo size={25} weight="bold" />
                        </a>
                    </div>
                    <div className={styles.link}>
                        <a href="#">
                            <InstagramLogo size={25} weight="bold" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroBand
