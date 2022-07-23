import Head from "next/head"
import React, { useEffect, useState } from "react"
import styles from "../../styles/result.module.css"
import MarkDisplayComponent from "../../components/MarkDisplayComponent"
import { fetchResultTwelve } from "../../service/fetchResult"

export default function ResultTwelve() {
    const [choice, setChoice] = useState("Biology Science")
    const [result, setResult] = useState("")
    const [stream, setStream] = useState("")

    const [answerMapTwelve, setAnswerMapTwelve] = useState(new Map())

    const getResult = async () => {
        if (typeof window !== "undefined") {
            let answer = JSON.parse(localStorage.getItem("answerMapTwelve"))
            let answerMapTwelve = new Map(Object.entries(answer))
            let survey = JSON.parse(localStorage.getItem("surveyMapTwelve"))

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
                survey["boardTwelve"],
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
            setAnswerMapTwelve(answerMapTwelve)
            setStream(localStorage.getItem("stream"))

            // var response = await fetchResultTwelve(JSON.stringify(input))
            // if (response) {
            //     console.log("response = " + response)
            //     setResult(response)
            //     console.log(response)
            // }
        }
    }

    useEffect(() => {
        getResult()
    }, [setAnswerMapTwelve])

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
            {answerMapTwelve ? (
                <MarkDisplayComponent answerMap={answerMapTwelve} stream={stream} />
            ) : null}
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
