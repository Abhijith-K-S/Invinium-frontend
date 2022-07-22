import React from "react"
import styles from "../styles/MarkDisplayComponent.module.css"

export default function MarkDisplayComponent(props) {
    let val = Array.from(Object.fromEntries(props.answerMap))

    val.sort((a, b) => {
        return b[1] - a[1]
    })

    let score = 0
    for (let i = 0; i < val.length; ++i) score = score + val[i][1]

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
                        style={{ backgroundColor: getColor(marks[1]) }}
                        key={marks[0]}
                    >
                        <div className={styles.container}>
                            <h5 className={styles.titleStyle}>
                                {marks[0].charAt(0).toUpperCase() + marks[0].slice(1)}
                            </h5>
                            <h4 className={styles.markStyle}>{marks[1]}/10</h4>
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
