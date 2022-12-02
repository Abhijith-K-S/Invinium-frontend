import { useState, useEffect } from "react"
import styles from "../../styles/SurveyInputComponent.module.css"

export default function SurveyInputChoiceComponent(props) {
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        props.getData(inputValue)
    }, [inputValue, props])

    return (
        <div className={styles.mainChoice}>
            <h3 className={styles.textStyle}>{props.question}</h3>
            <div className={styles.choiceLayout}>
                        <input
                            type="number"
                            // className={styles.radio}
                            name={props.question}
                            value={"KEAM Rank"}
                            onChange={(event) => {
                                setInputValue(event.target.value)
                            }}
                        />
                        <label>{"KEAM Rank"}</label>
            </div>
        </div>
    )
}
