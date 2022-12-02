import Head from "next/head"
import { useRouter } from "next/router"
import React, { useState } from "react"
import styles from "../../styles/survey.module.css"
import SurveyInputSliderComponent from "../../components/SurveyInputComponent/SurveyInputSliderComponent"
import SurveyInputChoiceComponent from "../../components/SurveyInputComponent/SurveyInputChoiceComponent"
import SurveyInputNumComponent from "../../components/SurveyInputComponent/SurveyInputNumComponent"

export default function SurveyEngg() {
    const router = useRouter()

    const [gender, setGender] = useState(0)
    // const [boardTwelve, setBoardTwelve] = useState(0)
    const [stream, setStream] = useState(0)
    const [likedTopicMath, setLikedTopicMath] = useState(0)
    const [likedTopicPhy, setLikedTopicPhy] = useState(0)
    const [tution, setTution] = useState(0)
    const [exhib, setExhib] = useState(0)
    const [fig, setFig] = useState(0)
    // const [likedBranch, /] = useState(0)
    const [softJob, setSoftJob] = useState(0)
    const [IES, setIES] = useState(0)
    const [work, setWork] = useState(0)
    // const [likedTopic, setLikedTopic] = useState(0)
    const [PSU, setPSU] = useState(0)
    const [reason, setReason] = useState(0)
    const [learningMethod, setlearningMethod] = useState(0)
    const [socialPreference, setSocialPreference] = useState(0)
    const [approach, setApproach] = useState(0)
    const [progknowledge, setProgknowledge] = useState(0)
    const [studyHours, setStudyHours] = useState(0)
    const [extracurricular, setExtracurricular] = useState(0)
    const [bookRefer, setBookRefer] = useState(0)
    
    const evaluateSurvey = () => {
        if (
            gender == "" ||
            stream == "" ||
            likedTopicMath == "" ||
            likedTopicPhy == "" ||
            tution == "" ||
            exhib == "" ||
            fig == "" ||
            softJob==""||
            IES==""||
            work==""||
            PSU==""||
            reason==""||
            learningMethod == "" ||
            socialPreference == "" ||
            approach == ""
        ) {
            alert("Please fill all entries")
        } else {
            const surveyMapEngg = new Map([
                ["gender", parseInt(gender)],
                ["stream", parseInt(stream)],
                ["likedTopicMath", parseInt(likedTopicMath)],
                ["likedTopicPhy", parseInt(likedTopicPhy)],
                ["tution", parseInt(tution)],
                ["exhib", parseInt(exhib)],
                ["fig", parseInt(fig)],
                ["softJob", parseInt(softJob)],
                ["IES", parseInt(IES)],
                ["work", parseInt(work)],
                ["PSU", parseInt(PSU)],
                ["learningMethod", parseInt(learningMethod)],
                ["socialPreference", parseInt(socialPreference)],
                ["approach", parseInt(approach)],
                ["reason", parseInt(reason)],
                ["progknowledge", parseInt(progknowledge)],
                ["studyHours", parseInt(studyHours)],
                ["extracurricular", parseInt(extracurricular)],
                ["bookRefer", parseInt(bookRefer)]
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
            {/* <SurveyInputChoiceComponent
                question={"University"}
                options={{ "KTU": 0, IIT: 1, NIT: 2 }}
                getData={setBoardTwelve}
            /> */}
            <SurveyInputChoiceComponent
                question={"Course studied in class 12"}
                options={{ "Computer Science": 1, "Biology": 0, "Commerce": 2 }}
                getData={setStream}
            />
            <SurveyInputChoiceComponent
                question={"Favorite subject from class 12"}
                options={{ "Mathematics": 1, "Physics": 2, "Chemistry": 3, "Computer Science": 0 }}
                getData={setTution}
            />
            <SurveyInputChoiceComponent
                question={"Favorite topic from class 12 Mathematics"}
                options={{
                    "Relations and Functions": 0,
                    "Algebra": 1,
                    "Calculus": 2,
                    "Vectors and Geometry": 3,
                    "Statistics  and Linear Programming": 4,
                    "Probability": 5
                }}
                getData={setLikedTopicMath}
            />
            <SurveyInputChoiceComponent
                question={"Favorite topic from class 12 Physics"}
                options={{
                    "Mechanics": 0,
                    "Electrostatics and Magnetism": 1,
                    "Optics and Modern Physics": 2,
                    "Heat and Thermodynamic": 3,
                    "Current Electricity and Electromagnetic Induction": 4,
                    "Semiconductors and Communication systems": 5
                }}
                getData={setLikedTopicPhy}
            />
            
            <SurveyInputChoiceComponent
                question={
                    "Have you participated in any science exhibitions?:"
                }
                options={{ "Yes":1, "No": 0 }}
                getData={setExhib}
            />
            <SurveyInputChoiceComponent
                question={
                    "Do you like to draw figures?:"
                }
                options={{ "Yes":1, "No": 0 }}
                getData={setFig}
            />
            {/* <SurveyInputChoiceComponent
                question={"Which engineering branch do you want to get?"}
                options={{
                    "Computer Science Engineering or Related branches": 0,
                    "Mechanical Engineering or Related branches": 1,
                    "Electronics or Related branches": 2,
                    "Electrical Engineering": 3,
                    "Civil Engineering": 4,
                    "Chemical Engineering": 5
                }}
                getData={setLikedBranch}
            /> */}
            {/* <SurveyInputNumComponent
                question={"What is your KEAM rank ?:"}
                getData={setRank}
            /> */}
            <SurveyInputChoiceComponent
                question={"Do you like to work in software related jobs"}
                options={{ Yes: 1, No: 0 }}
                getData={setSoftJob}
            />
            <SurveyInputChoiceComponent
                question={"Do you plan to write Indian Engineering Service (IES ) Examination?"}
                options={{ Yes: 1, No: 0 }}
                getData={setIES}
            />
            <SurveyInputChoiceComponent
                question={"Preferred mode of work?"}
                options={{ "Outdoor work": 1, "Indoor work": 0 }}
                getData={setWork}
            />
            {/* <SurveyInputChoiceComponent
                question={"Topics you wish to study?"}
                options={{
                    "Power System and Electrical Machines": 0,
                    "Network ,Circuits and Communications": 1,
                    "Programming , Data Structures and Algorithms , System Software, Theory of Computation": 2,
                    "Structural, Environmental,Transportation Engineering": 3,
                    "Applied Mechanics ,Fluid Mechanics and Thermal Sciences": 4,
                    "Thermodynamics,Heat Transfer, Mass Transfer,Chemical Reaction Engineering": 5
                }}
                getData={setLikedTopic}
            /> */}
            <SurveyInputChoiceComponent
                question={"Do you like to work in a Public Sector Unit (PSU) ??"}
                options={{ Yes: 1, No: 0 }}
                getData={setPSU}
            />
            <SurveyInputChoiceComponent
                question={"Which learning method do you prefer"}
                options={{ "Practical": 0, "Theoretical": 1 }}
                getData={setlearningMethod}
            />
            <SurveyInputChoiceComponent
                question={"What would be your preference while choosing your career"}
                options={{ "Social Welfare": 0, "Personal Gain": 1 }}
                getData={setSocialPreference}
            />
            <SurveyInputChoiceComponent
                question={"Which of the following mentions your reason for choosing B.Tech?"}
                options={{
                    "Quick Job": 0,
                    "Academic Research": 1,
                    "Government Job": 2,
                    "Higher Studies": 3,
                    "Parents or Friends opinion": 4
                }}
                getData={setReason}
            />
            <SurveyInputChoiceComponent
                question={"How would you approach a problem in front of you in a real world scenario?"
                }
                options={{ "Intiuitively": 0, "Conceptually": 1, "Computationally": 2 }}
                getData={setApproach}
            />
            <SurveyInputChoiceComponent
                question={"How often do you revise academic topics"}
                options={{ "Regularly": 0, "During exam times": 1 }}
                getData={setSocialPreference}
            />
            <SurveyInputSliderComponent
                question={"How often do you refer reference books?(0 being never and 5 being frequently)"}
                max={5}
                min={0}
                getData={setBookRefer}
            />
            <SurveyInputSliderComponent
                question={"Rate your knowledge of programming at the school level? (0 being the no experience and 5 being high experience)?"}
                max={5}
                min={0}
                getData={setProgknowledge}
            />
            <SurveyInputSliderComponent
                question={"Average study time per day spent during your class 12 studies (in hours):?"}
                max={12}
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
