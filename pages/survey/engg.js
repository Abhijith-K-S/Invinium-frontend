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
    const [stream, setStream] = useState(0)
    const [maths, setMaths] = useState(0)
    const [physics, setPhysics] = useState(0)
    const [chemistry, setChemistry] = useState(0)
    const [other, setOther] = useState(0)
    const [favouriteSubject, setFavouriteSubject] = useState(0)
    const [likedTopicMath, setLikedTopicMath] = useState(0)
    const [likedTopicPhy, setLikedTopicPhy] = useState(0)
    const [exhib, setExhib] = useState(0)
    const [fig, setFig] = useState(0)
    const [softJob, setSoftJob] = useState(0)
    const [IES, setIES] = useState(0)
    const [work, setWork] = useState(0)
    const [PSU, setPSU] = useState(0)
    const [reason, setReason] = useState(0)
    const [learningMethod, setlearningMethod] = useState(0)
    const [socialPreference, setSocialPreference] = useState(0)
    const [approach, setApproach] = useState(0)
    const [revision, setRevision] = useState(0)
    const [difficulty, setDifficulty] = useState(0)
    const [progknowledge, setProgknowledge] = useState(0)
    const [studyHours, setStudyHours] = useState(0)
    const [extracurricular, setExtracurricular] = useState(0)
    const [bookRefer, setBookRefer] = useState(0)
    const [likedBranch, setLikedBranch] = useState(0)
    const [rank, setRank] = useState(0)

    const evaluateSurvey = () => {
        if (
            gender == "" ||
            stream == "" ||
            maths == "" ||
            physics == "" ||
            chemistry == "" ||
            other == "" ||
            favouriteSubject == "" ||
            likedTopicMath == "" ||
            likedTopicPhy == "" ||
            exhib == "" ||
            fig == "" ||
            softJob == "" ||
            IES == "" ||
            work == "" ||
            PSU == "" ||
            reason == "" ||
            learningMethod == "" ||
            socialPreference == "" ||
            approach == "" ||
            revision == "" ||
            difficulty == "" ||
            progknowledge == "" ||
            studyHours == "" ||
            extracurricular == "" ||
            bookRefer == ""
        ) {
            alert("Please fill all entries")
        } else {
            const surveyMapEngg = new Map([
                ["gender", parseInt(gender)],
                ["stream", parseInt(stream)],
                ["maths", parseInt(maths)],
                ["physics", parseInt(physics)],
                ["chemistry", parseInt(chemistry)],
                ["other", parseInt(other)],
                ["favouriteSubject", parseInt(favouriteSubject)],
                ["likedTopicMath", parseInt(likedTopicMath)],
                ["likedTopicPhy", parseInt(likedTopicPhy)],
                ["exhibition", parseInt(exhib)],
                ["figure", parseInt(fig)],
                ["softwareJob", parseInt(softJob)],
                ["IES", parseInt(IES)],
                ["work", parseInt(work)],
                ["PSU", parseInt(PSU)],
                ["reason", parseInt(reason)],
                ["learningMethod", parseInt(learningMethod)],
                ["socialPreference", parseInt(socialPreference)],
                ["approach", parseInt(approach)],
                ["reason", parseInt(reason)],
                ["revision", parseInt(revision)],
                ["difficulty", parseInt(difficulty)],
                ["programmingKnowledge", parseInt(progknowledge)],
                ["studyHours", parseInt(studyHours)],
                ["extracurricular", parseInt(extracurricular)],
                ["bookRefer", parseInt(bookRefer)]
            ])

            if (typeof window !== "undefined") {
                localStorage.setItem(
                    "surveyMapEngg",
                    JSON.stringify(Object.fromEntries(surveyMapEngg))
                )
            }

            router.push("/aptitude/engg")
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
                question={"Course studied in class 12"}
                options={{ "Computer Science": 1, "Biology Science": 0, "Physical Education": 2 }}
                getData={setStream}
            />
            <SurveyInputSliderComponent
                question={
                    "Maths performance in class 12 (1 being the lowest score and 10 being the highest score)"
                }
                max={10}
                min={1}
                getData={setMaths}
            />
            <SurveyInputSliderComponent
                question={
                    "Physics performance in class 12 (1 being the lowest score and 10 being the highest score)"
                }
                max={10}
                min={1}
                getData={setPhysics}
            />
            <SurveyInputSliderComponent
                question={
                    "Chemistry performance in class 12 (1 being the lowest score and 10 being the highest score)"
                }
                max={10}
                min={1}
                getData={setChemistry}
            />
            <SurveyInputSliderComponent
                question={
                    "Biology Science/Computer Science performance (whichever applicable) in class 12 (1 being the lowest score and 10 being the highest score)"
                }
                max={10}
                min={1}
                getData={setOther}
            />
            <SurveyInputChoiceComponent
                question={"Favorite subject from class 12"}
                options={{ Physics: 0, "Computer Science": 1, Mathematics: 2, Chemistry: 3 }}
                getData={setFavouriteSubject}
            />
            <SurveyInputChoiceComponent
                question={"Favorite topic from class 12 Mathematics"}
                options={{
                    Calculus: 0,
                    Probability: 1,
                    "Vectors and Geometry": 2,
                    Algebra: 3,
                    "Relations and Functions": 4,
                    "Statistics  and Linear Programming": 5
                }}
                getData={setLikedTopicMath}
            />
            <SurveyInputChoiceComponent
                question={"Favorite topic from class 12 Physics"}
                options={{
                    "Current Electricity and Electromagnetic Induction": 0,
                    "Optics and Modern Physics": 1,
                    "Electrostatics and Magnetism": 2,
                    Mechanics: 3,
                    "Semiconductors and Communication systems": 4,
                    "Heat and Thermodynamic": 5
                }}
                getData={setLikedTopicPhy}
            />

            <SurveyInputChoiceComponent
                question={"Have you participated in any science exhibitions?:"}
                options={{ Yes: 1, No: 0 }}
                getData={setExhib}
            />
            <SurveyInputChoiceComponent
                question={"Do you like to draw figures?:"}
                options={{ Yes: 1, No: 0 }}
                getData={setFig}
            />
            <SurveyInputChoiceComponent
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
            />
            <SurveyInputNumComponent
                question={"What is your KEAM rank ?:"}
                getData={setRank}
            />
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
                options={{ "Outdoor work": 0, "Office work": 0 }}
                getData={setWork}
            />
            <SurveyInputChoiceComponent
                question={"Do you like to work in a Public Sector Unit (PSU) ??"}
                options={{ Yes: 1, No: 0 }}
                getData={setPSU}
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
                question={"Which of the following mentions your reason for choosing B.Tech?"}
                options={{
                    "Parents or Friends opinion": 0,
                    "Higher Studies": 1,
                    "Quick Job": 2,
                    "Academic Research": 3,
                    "Government Job": 4
                }}
                getData={setReason}
            />
            <SurveyInputChoiceComponent
                question={
                    "How would you approach a problem in front of you in a real world scenario?"
                }
                options={{ Intiuitively: 0, Conceptually: 1, Computationally: 2 }}
                getData={setApproach}
            />
            <SurveyInputChoiceComponent
                question={"How often do you revise academic topics"}
                options={{ "During exam times": 0, Regularly: 1 }}
                getData={setRevision}
            />
            <SurveyInputSliderComponent
                question={
                    "How difficult do you want your B.Tech course to be compared to your class 12 academics?(1 being very easy and 10 being very difficult)"
                }
                max={10}
                min={1}
                getData={setDifficulty}
            />
            <SurveyInputSliderComponent
                question={
                    "How often do you refer reference books?(0 being never and 5 being frequently)"
                }
                max={5}
                min={0}
                getData={setBookRefer}
            />
            <SurveyInputSliderComponent
                question={
                    "Rate your knowledge of programming at the school level? (0 being the no experience and 5 being high experience)?"
                }
                max={5}
                min={0}
                getData={setProgknowledge}
            />
            <SurveyInputSliderComponent
                question={
                    "Average study time per day spent during your class 12 studies (in hours):?"
                }
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
