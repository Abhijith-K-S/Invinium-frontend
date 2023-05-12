import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Bars } from "react-loading-icons"
import styles from "../../styles/result.module.css"
import MarkDisplayComponent from "../../components/MarkDisplayComponent"
import { fetchResultTen } from "../../service/fetchResult"
import data from "../../result_info.json"

export default function ResultTen() {
    const [choice, setChoice] = useState()
    const [answerMapTen, setAnswerMapTen] = useState(new Map())

    const getResult = async () => {
        if (typeof window !== "undefined") {
            let answer = JSON.parse(localStorage.getItem("answerMapTen"))
            let answerMapTen = new Map(Object.entries(answer))
            let survey = JSON.parse(localStorage.getItem("surveyMapTen"))
            let username = localStorage.getItem("username")

            var resultMap = {
                ...survey,
                ...answer
            }
            setAnswerMapTen(answerMapTen)

            var response = await fetchResultTen(username, resultMap)
            if (response) {
                console.log("response = " + response)

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
    }

    useEffect(() => {
        try {
            getResult()
        } catch (error) {
            console.log(error)
            alert("Error fetching result")
        }
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
                                        <h4>Compulsory Subjects</h4>
                                        <li>{data[choice].compulsory}</li>
                                        <h4>Optional Subjects</h4>
                                        <li>{data[choice].optional}</li>
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
