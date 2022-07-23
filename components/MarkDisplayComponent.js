import React from "react"
import styles from "../styles/MarkDisplayComponent.module.css"

export default function MarkDisplayComponent(props) {
    let answerMap = props.answerMap
    let stream = props.stream
    
    if (stream != null) {
        if (stream == "commerce") {
            answerMap.delete("physics")
            answerMap.delete("chemistry")
            answerMap.delete("biology")
            answerMap.delete("cs")
        } else {
            answerMap.delete("business")
            answerMap.delete("economics")
            answerMap.delete("accountancy")
            if (stream == "cs") answerMap.delete("biology")
            else if (stream == "biology") answerMap.delete("cs")
        }
    }

    let val = Array.from(props.answerMap, ([key, value]) => ({ key, value }))
    val.sort((a, b) => {
        return b.value - a.value
    })

    let score = 0
    for (let i = 0; i < val.length; ++i) score = score + val[i].value

    let total = 10 * val.length

    const getColor = (mark) => {
        if (mark <= 3) return "#ab0303"
        else if (mark > 3 && mark < 8) return "#bd9504"
        else return "#039403"
    }

    return (
        <div className={styles.layout}>
            <div className={styles.leftLayout}>
                {val.map((marks) => (
                    <div
                        className={styles.outerContainer}
                        style={{ backgroundColor: getColor(marks.value) }}
                        key={marks.key}
                    >
                        <div className={styles.container}>
                            <h5 className={styles.titleStyle}>
                                {marks.key.charAt(0).toUpperCase() + marks.key.slice(1)}
                            </h5>
                            <h4 className={styles.markStyle}>{marks.value}/10</h4>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.rightLayout}>
                <h1 className={styles.totalScore}>
                    <u>Total score</u>
                </h1>
                <h2 className={styles.score}>
                    {score}/{total}
                </h2>
            </div>
        </div>
    )
}
