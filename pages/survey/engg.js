import Head from "next/head"
import { useRouter } from "next/router"
import React, { useState } from "react"
import styles from "../../styles/survey.module.css"
import SurveyInputSliderComponent from "../../components/SurveyInputComponent/SurveyInputSliderComponent"
import SurveyInputChoiceComponent from "../../components/SurveyInputComponent/SurveyInputChoiceComponent"

export default function SurveyEngg() {
    const router = useRouter()

    const [gender, setGender] = useState(0)
    const [boardEngg, setBoardEngg] = useState(0)
    const [stream, setStream] = useState(0)
    const [likedCareer, setLikedCareer] = useState(0)
    const [tution, setTution] = useState(0)
    const [entrance, setEntrance] = useState(0)
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
            boardEngg == "" ||
            stream == "" ||
            likedCareer == "" ||
            tution == "" ||
            entrance == "" ||
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
            const surveyMapEngg = new Map([
                ["gender", parseInt(gender)],
                ["boardEngg", parseInt(boardEngg)],
                ["stream", parseInt(stream)],
                ["likedCareer", parseInt(likedCareer)],
                ["tution", parseInt(tution)],
                ["entrance", parseInt(entrance)],
                ["learningMethod", parseInt(learningMethod)],
                ["socialPreference", parseInt(socialPreference)],
                ["approach", parseInt(approach)],
                ["jobPreference", parseInt(jobPreference)],
                ["research", parseInt(research)],
                ["studyHours", parseInt(studyHours)],
                ["extracurricular", parseInt(extracurricular)]
            ])

            if (typeof window !== "undefined") {
                localStorage.setItem(
                    "surveyMapEngg",
                    JSON.stringify(Object.fromEntries(surveyMapEngg))
                )

                let streamName
                if (stream == 0) streamName = "biology"
                else if (stream == 1) streamName = "cs"
                else if (stream == 2) streamName = "commerce"

                localStorage.setItem("stream", streamName)
            }

            router.push("/aptitude/Engg")
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
                question={"University"}
                options={{ "KTU": 0, IIT: 1, NIT: 2 }}
                getData={setBoardEngg}
            />
            <SurveyInputChoiceComponent
                question={"What brach are you studying in"}
                options={{ "Computer Science": 1, Biology: 0, Commerce: 2 }}
                getData={setStream}
            />
            <SurveyInputChoiceComponent
                question={"Do you attend extra classes after college"}
                options={{ Yes: 1, No: 0 }}
                getData={setTution}
            />
            <SurveyInputChoiceComponent
                question={
                    "Do you attend any coaching for entrance examinations? If yes choose the appropriate option:"
                }
                options={{ Medicine: 1, Engineering: 2, Law: 3, None: 0 }}
                getData={setEntrance}
            />
            <SurveyInputChoiceComponent
                question={"What career do you wish to pursue after class 12?"}
                options={{
                    Engineering: 0,
                    Medicine: 1,
                    Pharmacy: 2,
                    Commerce: 3,
                    Arts: 4,
                    Nursing: 5,
                    Management: 6
                }}
                getData={setLikedCareer}
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
