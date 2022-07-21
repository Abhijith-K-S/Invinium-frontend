import { useState, useEffect } from "react"
import Slider from "react-input-slider"
import styles from "../../styles/SurveyInputComponent.module.css"

export default function SurveyInputSliderComponent(props) {
    const [inputValue, setInputValue] = useState(props.min)

    useEffect(() => {
        props.getData(inputValue)
    }, [inputValue, props])

    return (
        <div className={styles.main}>
            <h3 className={styles.textStyle}>{props.question}</h3>
            <div className={styles.rightComponent}>
                <h2 className={styles.valStyle}>{inputValue}</h2>
                <Slider
                    axis={"x"}
                    xmax={props.max}
                    xmin={props.min}
                    xstep={1}
                    onChange={({ x }) => setInputValue(x)}
                    x={inputValue}
                    styles={{
                        track: {
                            backgroundColor: "#000010"
                        },
                        active: {
                            backgroundColor: "#19dce3"
                        },
                        disabled: {
                            opacity: 0.5
                        }
                    }}
                />
            </div>
        </div>
    )
}
