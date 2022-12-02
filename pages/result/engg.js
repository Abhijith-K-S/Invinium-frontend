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

            let phyOrAcc, chemOrBs
            let stream = localStorage.getItem("stream")

            if (stream == "commerce") {
                phyOrAcc = "accountancy"
                chemOrBs = "business"
            } else {
                phyOrAcc = "physics"
                chemOrBs = "chemistry"
            }

            var input = [
                survey["gender"],
                survey["boardEngg"],
                survey["stream"],
                answer["maths"],
                answer[phyOrAcc],
                answer[chemOrBs],
                answer[stream],
                answer["verbal"],
                survey["studyHours"],
                survey["tution"],
                survey["entrance"],
                survey["learningMethod"],
                survey["socialPreference"],
                survey["extracurricular"],
                survey["approach"],
                survey["jobPreference"],
                survey["research"],
                answer["logical"],
                answer["quantitative"],
                answer["analytical"],
                answer["verbal"]
            ]

            console.log(input)
            setAnswerMapEngg(answerMapEngg)
            setStream(localStorage.getItem("stream"))

            var response = await fetchResultEngg(JSON.stringify(input))
            if (response) {
                console.log("response = " + response)
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