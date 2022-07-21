import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { useState } from "react"
import styles from "../styles/intro.module.css"
import programmer from "../assets/programmer.png"
import scientist from "../assets/scientist.png"
import manager from "../assets/commerce.png"
import { Logo } from "../components/LogoComponent"

export default function Intro() {
    const router = useRouter()
    const [choice, setChoice] = useState(10)
    
    return (
        <>
        <div className={styles.logoStyle}>
           <a href="/"><Logo /></a> 
        </div>
        <div className={styles.main}>
            <Head>
                <title>Invinium: Intro</title>
                <meta name="Invinium" content="Intro" />
                <link rel="icon" href="./favicon.ico" />
            </Head>

            <div className={styles.header}>
                <h1 className={styles.textStyle}>Welcome to Invinium</h1>
                <h3 className={styles.textStyle}>The one stop career guidance solution</h3>
            </div>

            <div className={styles.contentStyle}>
                <p className={styles.textStyle}>
                    Hello user and welcome to Invinium, the ultimate carrer guidance tool. Confused
                    about your future? {"Can't"} decide which career to choose? Well fear no more as
                    you have come to the right place. Invinium can help you to identify your ideal
                    field of interest
                </h3>

                <div className={styles.imagePanel}>
                    <ImageComponent imageUri={programmer} />
                    <ImageComponent imageUri={scientist} />
                    <ImageComponent imageUri={manager} />
                </div>

                <p className={styles.subTextStyle}>
                    Attempt a questionnaire to identify your academic potential and areas of
                    interests.
                </p>
                <h4 className={styles.subTextStyle}>Begin Test whenever you are ready</h4>
                <div className={styles.inputStyle}> 
                    <h3>Your current education level is</h3>
                    <input className={styles.option1}
                        type="radio"
                        id="option1"
                        name="10"
                        value={"10"}
                        checked={choice === 10}
                        onClick={(event) => {
                            setChoice(10)
                            console.log(choice)
                        }}
                    />
                    <label>10th</label>
                    <input 
                        type="radio"
                        id="option2"
                        name="12"
                        value={"12"}
                        checked={choice === 12}
                        onClick={(event) => {
                            setChoice(12)
                            console.log(choice)
                        }}
                    />
                    <label>12th</label>
                    <br />
                    <br />
                </div>
                <button className={styles.buttonStyle} onClick={() => router.push("/aptitude")}>
                    Begin Test
                </button>
            </div>
        </div>
        </>
    )
}

const ImageComponent = ({ imageUri }) => {
    return (
        <div className={styles.imageIconStyle}>
            <Image
                src={imageUri}
                alt="image"
                objectFit="fill"
                layout="responsive"
                className="rounded-full"
            />
        </div>
    )
}
