import Head from "next/head"
import React, { useEffect, useState } from "react"
import styles from "../../styles/result.module.css"
import Image from "next/image"
import MarkDisplayComponent from "../../components/MarkDisplayComponent"
import { fetchResultTen } from "../../service/authService"
import data from '../../result_info.json'


export default function ResultTen() {
    const [choice, setChoice] = useState("Biology Science")
    const [result, setResult] = useState("")
    var subjects={
        "biology":0,
        "cs":1,
        "commerce":2,
        "humanities":3,
    }
    const [subject,setSubject]=useState(0)
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
                        <p>{choice}</p>
                        <div className={styles.imgHolder}>
                            <Image
                                src={data[subject].image}
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
                            <summary className={styles.textSummary}>Know more about the course.</summary>
                            <span className={styles.textDetails}>
                                <ul>
                                    {/* <li>Science students have multiple career options such as MBBS, BE / B.Tech, BDS, BAMS, MBA, CS, CA, ME, Commercial Pilot Course, etc.</li>
                                    <li>Best education institutes to study such as IITs, NITS, and AIIMs.</li>
                                    <li>It helps to develop a creative mindset and problem-solving ability.</li>
                                    <li>It helps to become a master in the technical field.</li>
                                    <li>It is easy to find a job with a very good salary for science students.</li>
                                    <li>Easy to switch stream.</li> */}
                                    {data[subject].points.map(sample => <li >{sample.point}</li>)}
                                    <h4>Compulsory Subjects</h4>
                                    <li>{data[subject].compulsory}</li>
                                    <h4>Optional Subjects</h4>
                                    <li>{data[subject].optional}</li>
                                    
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
