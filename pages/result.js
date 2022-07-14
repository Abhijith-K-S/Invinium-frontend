import React, { useState } from "react"
import CustomInputComponent from "../components/CustomInputComponent"
import styles from "../styles/result.module.css"
export default function Result(){
    const [choice, setChoice] = useState("Biology Science")

    const [counter, setCounter] = useState(0)
  
    // const right = () => {
    //   if(counter<data.length-1) setCounter(counter + 1)
    // }
    
    // const left = () => {
    //     if(counter>0)setCounter(counter - 1)
    // }
    // const arr = Array(20).fill(1)

    // console.log(data[counter])
    
    return (
        <>
            <div className={styles.top}>
                <div>
                    <div><p className={styles.h1}>Result</p></div>
                </div>
                <div>

                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.lleft}>
                    <h3>Your potential career path is</h3><br/>
                    <p>{choice}</p>
                </div>
                <div className={styles.rright}>
                    
                </div>
            </div>
        </>
    );
}