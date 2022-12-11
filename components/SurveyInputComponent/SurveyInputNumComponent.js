import { useState, useEffect } from "react"
import styles from "../../styles/SurveyInputComponent.module.css"

export default function SurveyInputNumComponent(props) {
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
                            value={inputValue}
                            onChange={(event) => {
                                setInputValue(event.target.value)
                            }}
                        />
            </div>
        </div>
    )
}
