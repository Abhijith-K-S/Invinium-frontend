import Head from "next/head"
import React, { useEffect, useState } from "react"
import { BallTriangle } from "react-loading-icons"
import styles from "../../styles/result.module.css"
import MarkDisplayComponent from "../../components/MarkDisplayComponent"
import { fetchResultTen } from "../../service/fetchResult"

export default function ResultTen() {
    const [choice, setChoice] = useState()
    const [result, setResult] = useState("")
    const [answerMapTen, setAnswerMapTen] = useState(new Map())

    const getResult = async () => {
        if (typeof window !== "undefined") {
            let answer = JSON.parse(localStorage.getItem("answerMapTen"))
            let answerMapTen = new Map(Object.entries(answer))
            let survey = JSON.parse(localStorage.getItem("surveyMapTen"))

            var input = [
                survey["gender"],
                answer["maths"],
                answer["physics"],
                answer["chemistry"],
                answer["biology"],
                answer["social"],
                answer["verbal"],
                survey["boardTen"],
                survey["boardTwelve"],
                survey["studyHours"],
                survey["tution"],
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

            setAnswerMapTen(answerMapTen)

            // var response = await fetchResultTen(JSON.stringify(input))
            // if (response) {
            //     console.log("response = " + response)
            //     setResult(response)
            //     console.log(response)
            // }

            let max = 0
            Object.entries(response).forEach((item) => {
                if (item[1] > max) {
                    max = item[1]
                    if (item[0] == "cs") setChoice("Computer Science")
                    else if (item[0] == "biology") setChoice("Biology Science")
                    else setChoice(item[0].charAt(0).toUpperCase() + item[0].slice(1))
                }
            })
        }
    }

    useEffect(() => {
        getResult()
    }, [setAnswerMapTen])

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
            {answerMapTen ? <MarkDisplayComponent answerMap={answerMapTen} /> : null}
            <div className={styles.bottom}>
                <div className={styles.lleft}>
                    <h3>Your potential career path is</h3>
                    <br />
                    {choice ? (
                        <p>{choice}</p>
                    ) : (
                        <BallTriangle
                            className={styles.loadingIcon}
                            stroke="#00000020"
                            fill="#ffffff"
                            fill-opacity={"#ffffff"}
                            height="50"
                            width="50"
                        />
                    )}
                </div>
                <div className={styles.rright}></div>
            </div>
        </>
    )
}
