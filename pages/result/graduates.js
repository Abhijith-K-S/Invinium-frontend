import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Bars } from "react-loading-icons"
import styles from "../../styles/result.module.css"
import MarkDisplayComponent from "../../components/MarkDisplayComponent"
import { fetchResultGraduate } from "../../service/fetchResult"
import data from "../../grad.json"
import { useRouter } from "next/router"

export default function ResultGraduates() {
    const [choice, setChoice] = useState()
    const [choice2, setChoice2] = useState()
    const [choice3, setChoice3] = useState()
    const [answerMapGraduates, setAnswerMapGraduates] = useState(new Map())
    const router = useRouter()

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

                let max = 0,max1=0,max2=0;
                let temp0="",temp1="",temp2=""
                Object.entries(response).forEach((item) => {
                    if (item[1] > max) {
                        if (temp1!="") temp2=temp1
                        if (temp0!="")  temp1=temp0
                        temp0=item[0]
                        max2=max1
                        max1=max
                        max = item[1]
                    }
                    else if (item[1] > max1){
                        if (temp1!="") temp2=temp1
                        temp1=item[0]
                        max2=max1
                        max1=item[1]
                    }
            
                    else if (item[1] > max2){
                        temp2=item[0]
                        max2 = item[1];
                    }
                })
                setChoice(temp0)
                setChoice2(temp1)
                setChoice3(temp2)
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

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("jobKeyword", choice)
        }
    }, [choice])

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
                            <h4>Some other jobs that'll suit you are..</h4>
                            <ul>
                                <li 
                                    className={styles.listItem}
                                    onClick={() => {
                                        let temp=choice
                                        setChoice(choice2)
                                        setChoice2(temp)
                                    }}
                                ><div className={styles.tooltip}>{choice2} <span className={styles.tooltiptext}>Click to view info about {choice2}</span></div></li>
                                <li 
                                    className={styles.listItem}
                                    onClick={() => {
                                        let temp=choice
                                        setChoice(choice3)
                                        setChoice3(temp)
                                    }}
                                ><div className={styles.tooltip}>{choice3} <span className={styles.tooltiptext}>Click to view info about {choice3}</span></div></li>
                            </ul>
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
            <button
                className={styles.buttonStyle}
                onClick={() => {
                    router.push("/jobs")
                }}
            >
                Job Suggestions
            </button>
        </>
    )
}
