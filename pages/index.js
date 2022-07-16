import Head from "next/head"
import Image from "next/image"
import HeaderComponent from "../components/HeaderComponent"
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
                {/* <HeaderComponent /> */}
                <div className={styles.card}>
                    <div className={styles.cardLeft}>

                    </div>
                    <div className={styles.cardRight}>
                    <Image
                            src="/home.png"
                            alt="image"
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            layout="responsive"
                        />
                    </div>
                </div>
                <button ></button>
            </main>
        </div>
    )
}
