import Head from "next/head"
import React, { useState } from "react"
import styles from "../styles/result.module.css"
export default function Result() {
    const [choice, setChoice] = useState("Biology Science")

    const [counter, setCounter] = useState(0)
    var answerMap, answer, surveyMap, survey

    const getResultInput = async () => {
        if (typeof window !== "undefined") {
            answer = JSON.parse(localStorage.getItem("answerMap"))
            answerMap = new Map(Object.entries(answer))
            survey = JSON.parse(localStorage.getItem("suveyMap"))
            surveyMap = new Map(Object.entries(survey))
        }
    }
    getResultInput()

    return (
        <>
            <Head>
                <title>Invinium: Result</title>
                <meta name="Invinium" content="Result" />
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <div className={styles.top}>
                <div>
                    <div>
                        <p className={styles.h1}>Result</p>
                    </div>
                </div>
                <div></div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.lleft}>
                    <h3>Your potential career path is</h3>
                    <br />
                    <p>{choice}</p>
                </div>
                <div className={styles.rright}></div>
            </div>
        </>
    )
}
