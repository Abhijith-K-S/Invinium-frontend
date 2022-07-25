import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Home.module.css"
import logo from "../assets/logo-circle.png"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Invinium</title>
                <meta name="Invinium" content="A career guidance tool" />
                <link rel="icon" href="./favicon.ico" />
            </Head>

            <div className={styles.card}>
                <a href=".">
                    <div className={styles.logoStyle}>
                    <Image src={logo} alt="logo"/>
                    </div>
                </a>
                <div className={styles.imageStyle} >
                    <Image src={"/bg1.png"} layout="fill" alt="background" />
                </div>
                <div className={styles.textStyle}>
                    <div className={styles.typewriter}>
                        {" "}
                        <p>INVINIUM</p>
                    </div>
                    {/* <div className={styles.cardLeft}>
                   <h3>SHAPE YOUR CAREER FOR BETTER FUTURE</h3>
                </div> */}
                </div>
                <Link href="/login">
                    <a>
                        <button className={styles.button}>GET STARTED</button>
                    </a>
                </Link>
            </div>
        </div>
    )
}
