import React, { useState } from "react"
import CustomInputComponent from "../../components/CustomInputComponent"
import styles from "../../styles/result.module.css"
export default function Result() {
    const [choice, setChoice] = useState("Biology Science")

    const [counter, setCounter] = useState(0)
    var answerMap, tmp

    // const right = () => {
    //   if(counter<data.length-1) setCounter(counter + 1)
    // }

    // const left = () => {
    //     if(counter>0)setCounter(counter - 1)
    // }
    // const arr = Array(20).fill(1)

    // console.log(data[counter])
    const getAnswerMap = async () => {
        if (typeof window !== "undefined") {
            tmp = JSON.parse(localStorage.getItem("answerMap"))
            answerMap = new Map(Object.entries(tmp))
        }
    }
    getAnswerMap()

    return (
        <>
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
