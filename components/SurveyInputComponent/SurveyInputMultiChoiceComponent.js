import { useState, useEffect } from "react"
import styles from "../../styles/SurveyInputComponent.module.css"

export default function SurveyInputMultiChoiceComponent(props) {
    const [inputValue, setInputValue] = useState("")
    const options = Array.from(Object.entries(props.options))

    useEffect(() => {
        props.getData(inputValue)
    }, [inputValue, props])

    return (
        <div className={styles.mainChoice}>
            <h3 className={styles.textStyle}>{props.question}</h3>
            <div className={styles.choiceLayout}>
                {options.map((option) => (
                    <div key={option[0]}>
                        <input
                            type="checkbox"
                            className={styles.radio}
                            name={props.question}
                            value={option[1]}
                            onChange={(event) => {
                                setInputValue(event.target.value)
                            }}
                        />
                        <label className={styles.question}>{option[0]}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}
