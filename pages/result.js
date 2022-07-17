import Head from "next/head"
import React, { useEffect, useState } from "react"
import styles from "../styles/result.module.css"
import { fetchResultTen } from "../service/authService"

export default function Result() {
    const [choice, setChoice] = useState("Biology Science")
    const [result, setResult] = useState("")
    var answerMap, answer, surveyMap, survey

    const getResult = async () => {
        if (typeof window !== "undefined") {
            answer = JSON.parse(localStorage.getItem("answerMap"))
            answerMap = new Map(Object.entries(answer))
            survey = JSON.parse(localStorage.getItem("surveyMap"))
            surveyMap = new Map(Object.entries(survey))

            var input = [
                surveyMap.get("gender"),
                answerMap.get("maths"),
                answerMap.get("physics"),
                answerMap.get("chemistry"),
                answerMap.get("biology"),
                answerMap.get("social"),
                answerMap.get("verbal"),
                surveyMap.get("boardTen"),
                surveyMap.get("boardTwelve"),
                surveyMap.get("studyHours"),
                surveyMap.get("tution"),
                surveyMap.get("learningMethod"),
                surveyMap.get("socialPreference"),
                surveyMap.get("extracurricular"),
                surveyMap.get("approach"),
                surveyMap.get("jobPreference"),
                surveyMap.get("research"),
                answerMap.get("logical"),
                answerMap.get("quantitative"),
                answerMap.get("analytical"),
                answerMap.get("verbal")
            ]

            var response = await fetchResultTen(JSON.stringify(input))
            if (response) {
                console.log("response = " + response)
                setResult(response)
            }
            console.log(JSON.stringify(input))
        }
    }

    useEffect(() => {
        getResult()
    }, [setResult])

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
