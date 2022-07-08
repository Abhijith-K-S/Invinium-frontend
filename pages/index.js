import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Invinium</title>
                <meta name="Invinium" content="A career guidance tool" />
                <link rel="icon" href="./favicon.ico" />
            </Head>

            <main>
                <button className={styles.card}></button>
            </main>
        </div>
    )
}