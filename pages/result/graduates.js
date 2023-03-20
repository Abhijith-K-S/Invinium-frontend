import Head from "next/head"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Bars } from "react-loading-icons"
import styles from "../../styles/result.module.css"
import MarkDisplayComponent from "../../components/MarkDisplayComponent"
import { fetchResultEngg } from "../../service/fetchResult"
import data from "../../extracurricular.json"

export default function ResultEngg() {
    const [choice, setChoice] = useState("")
    const [choiceText, setChoiceText] = useState("")

    const [answerMapGrad, setAnswerMapGrad] = useState(new Map())

    const getResult = async () => {
        if (typeof window !== "undefined") {
            let answer = JSON.parse(localStorage.getItem("answerMapGrad"))
            let answerMapGrad = new Map(Object.entries(answer))
            let survey = JSON.parse(localStorage.getItem("surveyMapGrad"))

            let businessAnalyst = answer["Business Analyst"]
            let dataEngineer = answer["Data Engineer"]
            let systemEngineer = answer["System Engineer"]
            let securityEngineer = answer["Security Engineer"]
            let Developer = answer["Developer"]
            let UI_UX = answer["UI/UX"]
            let qualityAssurance = answer["Quality Assurance"]
            let projectManager = answer["Project Manager"]
            let technicalSupport = answer["Technical Support"]
            let networkEngineer = answer["Security Engineer"]
            let solutionsArchitect = answer["Solutions Architect"]

            let highScore = Math.max(businessAnalyst, dataEngineer, systemEngineer, securityEngineer, Developer, UI_UX, qualityAssurance, projectManager, technicalSupport, networkEngineer, solutionsArchitect)
            let preferredSubject
            if (highScore == businessAnalyst) preferredSubject = 0
            else if (highScore == dataEngineer) preferredSubject = 1
            else if (highScore == systemEngineer) preferredSubject = 2
            else if (highScore == securityEngineer) preferredSubject = 3
            else if (highScore == Developer) preferredSubject = 4
            else if (highScore == UI_UX) preferredSubject = 5
            else if (highScore == qualityAssurance) preferredSubject = 6
            else if (highScore == projectManager) preferredSubject = 7
            else if (highScore == technicalSupport) preferredSubject = 8
            else if (highScore == networkEngineer) preferredSubject = 9
            else preferredSubject = 10

            const result = [
                resultMap["os"],
                resultMap["algorithms"],
                resultMap["programming"],
                resultMap["software"],
                resultMap["networks"],
                resultMap["electronics"],
                resultMap["architecture"],
                resultMap["maths"],
                resultMap["verbal"],
                resultMap["logical"],
                resultMap["hours"],
                resultMap["hackathons"],
                resultMap["codingSkill"],
                resultMap["publicSpeaking"],
                resultMap["workLongTime"],
                resultMap["selfLearning"],
                resultMap["extraCourses"],
                resultMap["certifications"],
                resultMap["workshops"],
                resultMap["talentTest"],
                resultMap["languageSkills"],
                resultMap["memory"],
                resultMap["subject"],
                resultMap["career"],
                resultMap["jobOrStudies"],
                resultMap["company"],
                resultMap["seniors"],
                resultMap["games"],
                resultMap["behaviour"],
                resultMap["managementOrTechnical"],
                resultMap["salaryOrWork"],
                resultMap["hardOrSmart"],
                resultMap["teams"],
                resultMap["introvert"]
            ]

            console.log(input)
            setAnswerMapGrad(answerMapGrad)
            console.log(JSON.stringify(input))
            var response = await fetchResultEngg(JSON.stringify(input))
            if (response) {
                console.log(response)
                let max = 0
                let branch = ""
                Object.entries(response).forEach((item) => {
                    if (item[1] > max) {
                        max = item[1]
                        branch = item[0]
                        setChoice(item[0])
                    }
                })
                //ToDo
                switch (branch) {
                    case "electronics":
                        setChoiceText("Electronics Engineering")
                        break
                    case "computer":
                        setChoiceText("Computer Science Engineering")
                        break
                    case "mechanical":
                        setChoiceText("Mechanical Engineering")
                        break
                    case "civil":
                        setChoiceText("Civil Engineering")
                        break
                    case "electrical":
                        setChoiceText("Electrical Engineering")
                        break
                }
            }
        }
    }

    useEffect(() => {
        getResult()
    }, [setAnswerMapGrad])

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
            {answerMapGrad ? <MarkDisplayComponent answerMap={answerMapGrad} /> : null}

            <div className={styles.bottom}>
                {choiceText ? (
                    <div className={styles.lleft}>
                        <div className={styles.choice}>
                            <h3>Your potential engineering stream is</h3>
                            <p>{choiceText}</p>
                            <div className={styles.imgHolder}>
                                <Image
                                    src={data[choice].image}
                                    alt="image"
                                    objectFit="contain"
                                    width="10%"
                                    height="10%"
                                    layout="responsive"
                                />
                            </div>
                        </div>
                        <div className={styles.info}>
                            <details>
                                <summary className={styles.textSummary}>
                                    Know more about the career building practices
                                </summary>
                                <span className={styles.textDetails}>
                                    <ul>
                                        {data[choice].points.map((sample) => (
                                            <li key={sample} style={{ marginTop: 20 }}>
                                                {sample}
                                            </li>
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
