import Head from "next/head"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"
import styles from "../../styles/aptitude.module.css"
import { Timer } from "../../components/TimerComponent"
import { fetchQuestionEngg } from "../../service/fetchQuestion"
import { Logo } from "../../components/LogoComponent"

export default function AptitudeEngg() {
    const router = useRouter()

    const [data, setData] = useState("")
    const [counter, setCounter] = useState(0)
    const [time, setTime] = useState(new Date())
    const [testOver, setTestOver] = useState(false)

    const [answers, setAnswers] = useState([])
    const [currentSelection, setCurrentSelection] = useState("")

    const answerMap = new Map([
        ["logical", 0],
        ["analytical", 0],
        ["quantitative", 0],
        ["verbal", 0],
        ["mechanical", 0],
        ["electrical", 0],
        ["electronics", 0],
        ["computer science", 0],
        ["civil", 0]
    ])

    const trackAnswers = (option) => {
        let newArray = answers
        newArray[counter] = option
        setAnswers(newArray)
        setCurrentSelection(option)
    }

    const evaluateAnswers = () => {
        for (var i = 0; i < data.length; ++i) {
            if (data[i].answer == answers[i]) {
                var score = answerMap.get(data[i].category.toLowerCase())

                if (data[i].level.toLowerCase() == "easy") score = score + 1
                else if (data[i].level.toLowerCase() == "moderate") score = score + 2
                else if (data[i].level.toLowerCase() == "hard") score = score + 3

                answerMap.set(data[i].category.toLowerCase(), score)
                console.log("set" + data[i].category + "to " + score)
            }
        }

        if (typeof window !== "undefined") {
            localStorage.setItem("answerMapEngg", JSON.stringify(Object.fromEntries(answerMap)))
        }

        router.push("/result/engg")
    }

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const questionData = await fetchQuestionEngg()
                setData(questionData)
            } catch (error) {
                console.log(error)
            }
        }
        fetchQuestion()
        const timeSet = new Date()
        timeSet.setMinutes(timeSet.getMinutes() + 30)
        setTime(timeSet)
    }, [setTime])

    const right = () => {
        if (counter < data.length - 1) {
            setCounter(counter + 1)
            setCurrentSelection(answers[counter + 1])
        }
        if (counter == data.length - 2) setTestOver(true)
    }

    const left = () => {
        if (counter > 0) {
            setCounter(counter - 1)
            setCurrentSelection(answers[counter - 1])
        }
        setTestOver(false)
    }

    if (data)
        return (
            <>
                <Head>
                    <title>Invinium: Aptitude test</title>
                    <meta name="Invinium" content="Aptitude" />
                    <link rel="icon" href="./favicon.ico" />
                </Head>
                <div className={styles.top}>
                    <div>
                        <Logo />
                        <div>
                            <h1>Questionnaire</h1>
                        </div>
                    </div>
                    <Timer
                        expiryTimestamp={time}
                        expiryAction={() => {
                            alert("Time expired")
                            evaluateAnswers()
                            router.push("/result/engg")
                        }}
                    />
                </div>
                <div className={styles.bottom}>
                    <div>
                        <MdArrowBackIos className={styles.arrow} onClick={left}></MdArrowBackIos>
                    </div>
                    <div className={styles.textfield}>
                        <div className={styles.qnc}>
                            <p className={styles.qncLeft}>
                                Q : {String(counter + 1).padStart(2, "0")}
                            </p>
                            <p className={styles.qncRight}>
                                Category:
                                {" " +
                                    data[counter].category.charAt(0).toUpperCase() +
                                    data[counter].category.slice(1)}
                            </p>
                        </div>
                        <p>{data[counter].question}</p>

                        <div>
                            <input
                                type="radio"
                                id="option1"
                                name="option"
                                value={"a"}
                                checked={currentSelection === "a"}
                                onChange={(event) => {
                                    trackAnswers(event.target.value)
                                    console.log("current: " + currentSelection)
                                    console.log(answers.toString() + answers.length)
                                }}
                            />
                            <label>{data[counter].optiona}</label>
                            <br />
                            <input
                                type="radio"
                                id="option2"
                                name="option"
                                value={"b"}
                                checked={currentSelection === "b"}
                                onChange={(event) => {
                                    trackAnswers(event.target.value)
                                    console.log("current: " + currentSelection)
                                    console.log(answers.toString() + answers.length)
                                }}
                            />
                            <label>{data[counter].optionb}</label>
                            <br />
                            <input
                                type="radio"
                                id="option3"
                                name="option"
                                value={"c"}
                                checked={currentSelection === "c"}
                                onChange={(event) => {
                                    trackAnswers(event.target.value)
                                    console.log("current: " + currentSelection)
                                    console.log(answers.toString() + answers.length)
                                }}
                            />
                            <label>{data[counter].optionc}</label>
                            <br />
                            <input
                                type="radio"
                                id="option4"
                                name="option"
                                value={"d"}
                                checked={currentSelection === "d"}
                                onChange={(event) => {
                                    trackAnswers(event.target.value)
                                    console.log("current: " + currentSelection)
                                    console.log(answers.toString() + answers.length)
                                }}
                            ></input>
                            <label>{data[counter].optiond}</label>
                            <br />
                        </div>
                    </div>
                    <div>
                        <MdArrowForwardIos
                            className={styles.arrow}
                            onClick={right}
                        ></MdArrowForwardIos>
                    </div>
                </div>
                <div className={styles.buttonPanel}>
                    {testOver ? (
                        <button className={styles.buttonStyle} onClick={() => evaluateAnswers()}>
                            Submit Test
                        </button>
                    ) : null}
                </div>
            </>
        )
}
