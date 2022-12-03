import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Bars } from "react-loading-icons"
import styles from "../../styles/result.module.css"
import MarkDisplayComponent from "../../components/MarkDisplayComponent"
import { fetchResultEngg } from "../../service/fetchResult"
import data from "../../result_info.json"

export default function ResultEngg() {
    const [choice, setChoice] = useState()
    const [result, setResult] = useState("")
    const [stream, setStream] = useState("")

    const [answerMapEngg, setAnswerMapEngg] = useState(new Map())

    const getResult = async () => {
        if (typeof window !== "undefined") {
            let answer = JSON.parse(localStorage.getItem("answerMapEngg"))
            let answerMapEngg = new Map(Object.entries(answer))
            let survey = JSON.parse(localStorage.getItem("surveyMapEngg"))

            let mechanical = answer["mechanical"]
            let electrical = answer["electrical"]
            let electronics = answer["electronics"]
            let computer = answer["computer science"]
            let civil = answer["civil"]

            let highScore = Math.max(mechanical, electrical, electronics, computer, civil)
            let preferredSubject
            if (highScore == electrical) preferredSubject = 0
            else if (highScore == computerScience) preferredSubject = 1
            else if (highScore == civil) preferredSubject = 2
            else if (highScore == electronics) preferredSubject = 3
            else preferredSubject = 4

            var input = [
                survey["gender"],
                survey["stream"],
                survey["maths"],
                survey["physics"],
                survey["chemistry"],
                survey["other"],
                survey["favouriteSubject"],
                survey["likedTopicMath"],
                survey["likedTopicPhy"],
                survey["exhibition"],
                survey["figure"],
                survey["programmingKnowledge"],
                survey["studyHours"],
                survey["softwareJob"],
                survey["IES"],
                survey["work"],
                preferredSubject,
                survey["PSU"],
                survey["learningMethod"],
                survey["socialPreference"],
                survey["reason"],
                survey["revision"],
                survey["difficulty"],
                survey["bookRefer"],
                survey["extracurricular"],
                survey["approach"],
                answer["logical"],
                answer["quantitative"],
                answer["analytical"],
                answer["verbal"]
            ]

            console.log(input)
            setAnswerMapEngg(answerMapEngg)
            console.log(JSON.stringify(input))
            var response = await fetchResultEngg(JSON.stringify(input))
            if (response) {
                setResult(response)
                console.log(response)
            }

            let max = 0
            Object.entries(response).forEach((item) => {
                if (item[1] > max) {
                    max = item[1]
                    setChoice(item[0].charAt(0).toUpperCase() + item[0].slice(1))
                }
            })
        }
    }

    useEffect(() => {
        getResult()
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
            {answerMapEngg ? (
                <MarkDisplayComponent answerMap={answerMapEngg} stream={stream} />
            ) : null}

            <div className={styles.bottom}>
                {choice ? (
                    <div className={styles.lleft}>
                        <div className={styles.choice}>
                            <h3>Your potential career path is</h3>
                            <p>{choice}</p>
                            <div className={styles.imgHolder}>
                                <Image
                                    src={data[choice].image}
                                    alt="image"
                                    objectFit="cover"
                                    width="10%"
                                    height="10%"
                                    layout="responsive"
                                />
                            </div>
                        </div>
                        <div className={styles.info}>
                            <details>
                                <summary className={styles.textSummary}>
                                    Know more about the course.
                                </summary>
                                <span className={styles.textDetails}>
                                    <ul>
                                        {data[choice].points.map((sample) => (
                                            <li key={sample.point}>{sample.point}</li>
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
                        fill="#ffffff"
                        fill-opacity={"#ffffff"}
                        height="50"
                        width="50"
                    />
                )}
            </div>
        </>
    )
}
