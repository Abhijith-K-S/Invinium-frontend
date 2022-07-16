import Head from "next/head"
import { useRouter } from "next/router"
import React, { useState } from "react"
import styles from "../styles/survey.module.css"
import SurveyInputSliderComponent from "../components/SurveyInputComponent/SurveyInputSliderComponent"
import SurveyInputChoiceComponent from "../components/SurveyInputComponent/SurveyInputChoiceComponent"

export default function Survey() {
    const router = useRouter()

    const [gender, setGender] = useState(0)
    const [boardTen, setBoardTen] = useState(0)
    const [boardTwelve, setBoardTwelve] = useState(0)
    const [likedStream, setLikedStream] = useState(0)
    const [selectedStream, setSelectedStream] = useState(0)
    const [tution, setTution] = useState(0)
    const [learningMethod, setlearningMethod] = useState(0)
    const [socialPreference, setSocialPreference] = useState(0)
    const [approach, setApproach] = useState(0)
    const [jobPreference, setJobPreference] = useState(0)
    const [research, setResearch] = useState(0)
    const [studyHours, setStudyHours] = useState(0)
    const [extracurricular, setExtracurricular] = useState(0)

    const evaluateSurvey = () => {
        if (
            gender == "" ||
            boardTen == "" ||
            boardTwelve == "" ||
            likedStream == "" ||
            selectedStream == "" ||
            tution == "" ||
            learningMethod == "" ||
            socialPreference == "" ||
            approach == "" ||
            jobPreference == "" ||
            research == "" ||
            studyHours == "" ||
            extracurricular == ""
        ) {
            alert("Please fill all entries")
        } else {
            const surveyMap = new Map([
                ["gender", gender],
                ["boardTen", boardTen],
                ["boardTwelve", boardTwelve],
                ["likedStream", likedStream],
                ["selectedStream", selectedStream],
                ["tution", tution],
                ["learningMethod", learningMethod],
                ["socialPreference", socialPreference],
                ["approach", approach],
                ["jobPreference", jobPreference],
                ["research", research],
                ["studyHours", studyHours],
                ["extracurricular", extracurricular]
            ])

            if (typeof window !== "undefined") {
                localStorage.setItem("surveyMap", JSON.stringify(Object.fromEntries(surveyMap)))
            }

            router.push("/aptitude")
        }
    }

    return (
        <div className={styles.main}>
            <Head>
                <title>Invinium: Survey</title>
                <meta name="Invinium" content="Survey" />
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <div className={styles.top}>
                <h1 style={{ color: "#ffffff" }}>Introduction</h1>
                <h2 style={{ color: "#ffffff", marginTop: 0 }}>Tell me a bit about yourself</h2>
            </div>
            <SurveyInputChoiceComponent
                question={"Gender"}
                options={{ Male: 0, Female: 1, Other: 1 }}
                getData={setGender}
            />
            <SurveyInputChoiceComponent
                question={"Board of school in class 10"}
                options={{ "State board": 0, CBSE: 1, ICSE: 2 }}
                getData={setBoardTen}
            />
            <SurveyInputChoiceComponent
                question={"Board of school you wish to get admitted in class 12"}
                options={{ "State board": 0, CBSE: 1, ISC: 2 }}
                getData={setBoardTwelve}
            />
            <SurveyInputChoiceComponent
                question={"What stream did you wish to choose after class 10"}
                options={{ "Computer Science": 1, Biology: 2, Humanities: 3, Commerce: 4 }}
                getData={setLikedStream}
            />
            <SurveyInputChoiceComponent
                question={"What stream did you end up choosing"}
                options={{ "Computer Science": 1, Biology: 2, Humanities: 3, Commerce: 4 }}
                getData={setSelectedStream}
            />
            <SurveyInputChoiceComponent
                question={"Do you attend extra classes after school"}
                options={{ Yes: 1, No: 0 }}
                getData={setTution}
            />
            <SurveyInputChoiceComponent
                question={"Which learning method do you prefer"}
                options={{ Practical: 0, Theoretical: 1 }}
                getData={setlearningMethod}
            />
            <SurveyInputChoiceComponent
                question={"What would be your preference while choosing your career"}
                options={{ "Social Welfare": 0, "Personal Gain": 1 }}
                getData={setSocialPreference}
            />
            <SurveyInputChoiceComponent
                question={
                    "How would you approach  a problem in front of you in a real world scenario?"
                }
                options={{ Intiuitively: 0, Conceptually: 1, Computationally: 2 }}
                getData={setApproach}
            />
            <SurveyInputChoiceComponent
                question={"Your preference of jobs"}
                options={{ Professional: 0, "Non-professional": 1 }}
                getData={setJobPreference}
            />
            <SurveyInputChoiceComponent
                question={"Do you prefer a course involving intensive research"}
                options={{ Yes: 1, No: 0 }}
                getData={setResearch}
            />
            <SurveyInputSliderComponent
                question={"How much hours do you spend on study after school?"}
                max={10}
                min={0}
                getData={setStudyHours}
            />
            <SurveyInputSliderComponent
                question={"How often do you engage in extracurricular activities?"}
                max={5}
                min={0}
                getData={setExtracurricular}
            />
            <div className={styles.buttonPanel}>
                <button className={styles.buttonStyle} onClick={() => evaluateSurvey()}>
                    Proceed to aptitude test
                </button>
            </div>
        </div>
    )
}
