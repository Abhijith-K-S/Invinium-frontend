import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Bars } from "react-loading-icons"
import styles from "../../styles/result.module.css"
import MarkDisplayComponent from "../../components/MarkDisplayComponent"
import { fetchResultEngg } from "../../service/fetchResult"
import data from "../../extracurricular.json"

export default function ResultEngg() {
    const [choice, setChoice] = useState("")
    const [choiceText, setChoiceText] = useState("")
    const [answerMapEngg, setAnswerMapEngg] = useState(new Map())

    const getResult = async () => {
        if (typeof window !== "undefined") {
            let answer = JSON.parse(localStorage.getItem("answerMapEngg"))
            let answerMapEngg = new Map(Object.entries(answer))
            let survey = JSON.parse(localStorage.getItem("surveyMapEngg"))
            let username = localStorage.getItem("username")

            let mechanical = answer["mechanical"]
            let electrical = answer["electrical"]
            let electronics = answer["electronics"]
            let computer = answer["computer science"]
            let civil = answer["civil"]

            let highScore = Math.max(mechanical, electrical, electronics, computer, civil)
            let preferredSubject
            if (highScore == electrical) preferredSubject = 0
            else if (highScore == computer) preferredSubject = 1
            else if (highScore == civil) preferredSubject = 2
            else if (highScore == electronics) preferredSubject = 3
            else preferredSubject = 4

            var resultMap = {
                ...survey,
                ...answer,
                preferredSubject: preferredSubject
            }

            console.log(resultMap)
            setAnswerMapEngg(answerMapEngg)

            var response = await fetchResultEngg(username, resultMap)
            if (response) {
                console.log(response)
                let max = 0
                let branch = ""
                Object.entries(response).forEach((item) => {
                    if (item[1] > max) {
                        max = item[1]
                        branch = item[0]
                        setChoice(item[0])
                    }
                })

                switch (branch) {
                    case "electronics":
                        setChoiceText("Electronics Engineering")
                        break
                    case "computer":
                        setChoiceText("Computer Science Engineering")
                        break
                    case "mechanical":
                        setChoiceText("Mechanical Engineering")
                        break
                    case "civil":
                        setChoiceText("Civil Engineering")
                        break
                    case "electrical":
                        setChoiceText("Electrical Engineering")
                        break
                }
            }
        }
    }

    useEffect(() => {
        try {
            getResult()
        } catch (error) {
            console.log(error)
            alert("Error fetching result")
        }
    }, [setAnswerMapEngg])

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
            </div>
            {answerMapEngg ? <MarkDisplayComponent answerMap={answerMapEngg} /> : null}

            <div className={styles.bottom}>
                {choiceText ? (
                    <div className={styles.lleft}>
                        <div className={styles.choice}>
                            <h3>Your potential engineering stream is</h3>
                            <p>{choiceText}</p>
                            <div className={styles.imgHolder}>
                                <Image
                                    src={data[choice].image}
                                    alt="image"
                                    objectFit="contain"
                                    width="10%"
                                    height="10%"
                                    layout="responsive"
                                />
                            </div>
                        </div>
                        <div className={styles.info}>
                            <details>
                                <summary className={styles.textSummary}>
                                    Know more about the career building practices
                                </summary>
                                <span className={styles.textDetails}>
                                    <ul>
                                        {data[choice].points.map((sample) => (
                                            <li key={sample} style={{ marginTop: 20 }}>
                                                {sample}
                                            </li>
                                        ))}
                                    </ul>
                                </span>
                            </details>
                        </div>
                    </div>
                ) : (
                    <Bars
                        className={styles.loadingIcon}
                        stroke="#00000020"
                        fill="#000000"
                        fillOpacity={"#000000"}
                        height="50"
                        width="50"
                    />
                )}
            </div>
        </>
    )
}
