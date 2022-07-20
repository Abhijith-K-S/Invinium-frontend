import Head from "next/head"
import Image from "next/image"
import HeaderComponent from "../components/HeaderComponent"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div >
            <Head>
                <title>Invinium</title>
                <meta name="Invinium" content="A career guidance tool" />
                <link rel="icon" href="./favicon.ico" />
            </Head>

            <div className={styles.card}>
                <a href="."><img className={styles.logoStyle}  
                    src="./logo-circle.png"
                    alt="image"
                /></a>
                <img className={styles.imageStyle}
                    src="/bg1.png"
                    alt="image"
                />
                <div className={styles.textStyle}>
                <div className={styles.typewriter}> <p >INVINIUM</p></div>
                {/* <div className={styles.cardLeft}>
                   <h3>SHAPE YOUR CAREER FOR BETTER FUTURE</h3>
                </div> */}
                </div>
                <a href="/login"><button className={styles.button}>GET STARTED</button></a>
            </div>
        </div>
    )
}
