import React, { useState } from "react"
import styles from "../styles/aptitude.module.css"
import { MdArrowBackIos,MdArrowForwardIos } from "react-icons/md"
import data from '../generated.json'
export default function Aptitude(){
    const [choice, setChoice] = useState("")

    const [counter, setCounter] = useState(0)
  
    const right = () => {
      if(counter<data.length-1) setCounter(counter + 1)
    }
    
    const left = () => {
        if(counter>0)setCounter(counter - 1)
    }
    const arr = Array(20).fill(1)

    // console.log(data[counter])
    
    return (
        <>
            <div className={styles.top}>
                <div>
                    <div><h1>Questionnaire</h1></div>
                    <div><h4>Explore the career that matches your interests</h4></div>
                </div>
                <div>
                <a href="/user"><h3>User</h3></a>

                </div>
            </div>
            <div className={styles.bottom}>
                <div><MdArrowBackIos className={styles.arrow} onClick={left}></MdArrowBackIos></div>
                <div className={styles.textfield}>
                    <p>Q : {data[counter].no}</p>
                    <p>
                    {data[counter].question}
                    </p>
                    <div>
                        <input type="radio" id="option1" name="option" value={data[counter].options[0].option} onChange={(event) => {
                        setChoice(event.target.value) ,console.log(choice)}}></input>
                        <label >{data[counter].options[0].option}</label><br/>
                        <input type="radio" id="option2" name="option" value={data[counter].options[1].option} onChange={(event) => {
                        setChoice(event.target.value) ,console.log(choice)}}></input>
                        <label >{data[counter].options[1].option}</label><br/>
                        <input type="radio" id="option3" name="option" value={data[counter].options[2].option} onChange={(event) => {
                        setChoice(event.target.value) ,console.log(choice)}} ></input>
                        <label >{data[counter].options[2].option}</label><br/>
                        <input type="radio" id="option4" name="option" value={data[counter].options[3].option} onChange={(event) => {
                        setChoice(event.target.value) ,console.log(choice)}}></input>
                        <label>{data[counter].options[3].option}</label><br/>
                    </div>
                </div>
                <div><MdArrowForwardIos className={styles.arrow} onClick={right}></MdArrowForwardIos></div>
            </div>
        </>
    );
}