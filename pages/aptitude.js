import React, { useState, useEffect } from "react"
import styles from "../styles/aptitude.module.css"
import { Timer } from "../components/TimerComponent"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"
import { fetchQuestionTen } from "../service/authService"
import { useRouter } from "next/router"
import { Logo } from "../components/LogoComponent"

export default function Aptitude() {
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
        ["maths", 0],
        ["physics", 0],
        ["chemistry", 0],
        ["biology", 0],
        ["social", 0],
        ["english", 0]
    ])

    const trackAnswers = (option) => {
        let newArray = answers
        newArray[counter] = option
        setAnswers(newArray)
        setCurrentSelection(option)
    }

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const questionData = await fetchQuestionTen()
                setData(questionData)
            } catch (error) {
                console.log(error)
            }
        }
        fetchQuestion()
        const timeSet = new Date()
        timeSet.setMinutes(timeSet.getMinutes() + 30)
        setTime(timeSet)
    }, [])

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
                            router.push("/result")
                        }}
                    />
                </div>
                <div className={styles.bottom}>
                    <div>
                        <MdArrowBackIos className={styles.arrow} onClick={left}></MdArrowBackIos>
                    </div>
                    <div className={styles.textfield}>
                        <p>Q : {data[counter].questionid}</p>
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
