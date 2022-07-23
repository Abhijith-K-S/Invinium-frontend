import Head from "next/head"
import React, { useEffect, useState } from "react"
import styles from "../../styles/result.module.css"
import MarkDisplayComponent from "../../components/MarkDisplayComponent"
import { fetchResultTen } from "../../service/authService"

export default function ResultTen() {
    const [choice, setChoice] = useState("Biology Science")
    const [result, setResult] = useState("")
    var answerMapTen, answer, surveyMapTen, survey

    // const getResult = async () => {
    //     if (typeof window !== "undefined") {
    //         answer = JSON.parse(localStorage.getItem("answerMapTen"))
    //         answerMapTen = new Map(Object.entries(answer))
    //         survey = JSON.parse(localStorage.getItem("surveyMapTen"))
    //         surveyMapTen = new Map(Object.entries(survey))

    //         var input = [
    //             surveyMapTen.get("gender"),
    //             answerMapTen.get("maths"),
    //             answerMapTen.get("physics"),
    //             answerMapTen.get("chemistry"),
    //             answerMapTen.get("biology"),
    //             answerMapTen.get("social"),
    //             answerMapTen.get("verbal"),
    //             surveyMapTen.get("boardTen"),
    //             surveyMapTen.get("boardTwelve"),
    //             surveyMapTen.get("studyHours"),
    //             surveyMapTen.get("tution"),
    //             surveyMapTen.get("learningMethod"),
    //             surveyMapTen.get("socialPreference"),
    //             surveyMapTen.get("extracurricular"),
    //             surveyMapTen.get("approach"),
    //             surveyMapTen.get("jobPreference"),
    //             surveyMapTen.get("research"),
    //             answerMapTen.get("logical"),
    //             answerMapTen.get("quantitative"),
    //             answerMapTen.get("analytical"),
    //             answerMapTen.get("verbal")
    //         ]

    //         var response = await fetchResultTen(JSON.stringify(input))
    //         if (response) {
    //             console.log("response = " + response)
    //             setResult(response)
    //         }
    //         console.log(JSON.stringify(input))
    //     }
    // }

    // useEffect(() => {
    //     getResult()
    // })

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
            {/* <MarkDisplayComponent answerMap={answerMapTen} /> */}
            <div className={styles.bottom}>
                <div className={styles.lleft}>
                    <div className={styles.choice}>
                        <h3>Your potential career path is</h3>
                        <br />
                        <p>{choice}</p>
                    </div>
                    <div className={styles.info}>
                        <details>
                            <summary className={styles.textSummary}>Know more about the course.</summary>
                            <span className={styles.textDetails}>
                                <ul>
                                    <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
                                    <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
                                    <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
                                    <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
                                </ul>            
                            </span>
                        </details>
                    </div>
                </div>
                <div className={styles.rright}></div>
            </div>
        </>
    )
}
