import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import styles from "../styles/intro.module.css"
import programmer from "../assets/programmer.png"
import scientist from "../assets/scientist.png"
import manager from "../assets/commerce.png"

export default function Intro() {
    return (
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
                <h3 className={styles.textStyle}>
                    Hello user and welcome to Invinium, the ultimate carrer guidance tool. Confused
                    about your future? Can't decide which career to choose? Well fear no more as you
                    have come to the right place. Invinium can help you to identify your ideal field
                    of interest
                </h3>

                <div className={styles.imagePanel}>
                    <ImageComponent imageUri={programmer} />
                    <ImageComponent imageUri={scientist} />
                    <ImageComponent imageUri={manager} />
                </div>

                <h4 className={styles.subTextStyle}>
                    Attempt a questionnaire to identify your academic potential and areas of
                    interests.
                </h4>
                <h4 className={styles.subTextStyle}>Click Begin Test wheneven you are ready</h4>
                <button className={styles.buttonStyle}
                onClick={()=>alert("hello")}>Begin Test</button>
            </div>
        </div>
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
