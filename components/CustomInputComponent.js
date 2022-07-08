import { useState, useEffect } from "react"
import styles from "../styles/CustomInputComponent.module.css"

export default function CustomInputComponent(props) {
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        props.getData(inputValue)
    }, [inputValue, props])

    const getInput = (isHidden) => {
        if (isHidden)
            return (
                <input
                    type="password"
                    className={styles.inputStyle}
                    value={inputValue}
                    onChange={(event) => {
                        setInputValue(event.target.value)
                        props.getData(inputValue)
                    }}
                />
            )
        else
            return (
                <input
                    className={styles.inputStyle}
                    value={inputValue}
                    onChange={(event) => {
                        setInputValue(event.target.value)
                        props.getData(inputValue)
                    }}
                />
            )
    }

    return (
        <div className={styles.main}>
            <h4 className={styles.textStyle}>{props.input}</h4>
            {getInput(props.isHidden)}
        </div>
    )
}