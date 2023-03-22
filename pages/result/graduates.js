import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Bars } from "react-loading-icons"
import styles from "../../styles/result.module.css"
import MarkDisplayComponent from "../../components/MarkDisplayComponent"
import { fetchResultGraduate } from "../../service/fetchResult"
import data from "../../grad.json"

export default function ResultGraduates() {
    const [choice, setChoice] = useState()
    const [answerMapGraduates, setAnswerMapGraduates] = useState(new Map())

    const getResult = async () => {
        if (typeof window !== "undefined") {
            let answer = JSON.parse(localStorage.getItem("answerMapGraduates"))
            let answerMapGraduates = new Map(Object.entries(answer))
            let survey = JSON.parse(localStorage.getItem("surveyMapGraduates"))
            let username = localStorage.getItem("username")

            var resultMap = {
                ...survey
            }

            resultMap["os"] = answer["operating system"]
            resultMap["algorithms"] = answer["algorithm"]
            resultMap["programming"] = answer["programming"]
            resultMap["software"] = answer["software"]
            resultMap["networks"] = answer["computer networks"]
            resultMap["electronics"] = answer["electronics"]
            resultMap["architecture"] = answer["computer architecture"]
            resultMap["maths"] = answer["maths"]
            resultMap["verbal"] = answer["verbal"]
            resultMap["logical"] = answer["logical"]

            console.log(resultMap)
            setAnswerMapGraduates(answerMapGraduates)

            var response = await fetchResultGraduate(username, resultMap)

            console.log(response)
            if (response) {
                console.log(response)

                let max = 0
                Object.entries(response).forEach((item) => {
                    if (item[1] > max) {
                        max = item[1]
                        setChoice(item[0])
                    }
                })
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
    }, [setAnswerMapGraduates])

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
            {answerMapGraduates ? <MarkDisplayComponent answerMap={answerMapGraduates} /> : null}

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
                                    Know more about the Job.
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