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
    const [hours, setHours] = useState(0)
    const [hackathons, setHackathon] = useState(0)
    const [codingSkill, setCoding] = useState(0)
    const [publicSpeaking, setPublicSpeak] = useState(0)
    const [overtime, setOvertime] = useState(0)
    const [selfLearning, setSelfLearn] = useState(0)
    const [extraCourses, setCourse] = useState(0)
    const [certifications, setCertificate] = useState(0)
    const [workshops, setWorkshop] = useState(0)
    const [talentTest, setTalentTests] = useState(0)
    const [languageSkills, setLangSkills] = useState(0)
    const [memory, setMemoryCapability] = useState(0)
    const [subject, setInterestedSubjects] = useState(0)
    const [company, setCompanyType] = useState(0)
    const [career, setCareerTitles] = useState(0)
    const [jobOrStudies, setJobOrHigher] = useState(0)
    const [seniors, setSeniorsAdvice] = useState(0)
    const [games, setGames] = useState(0)
    const [behaviour, setStubbornOrGentle] = useState(0)
    const [salaryOrWork, setSalaryOrWork] = useState(0)
    const [hardOrSmart, setHardOrSmart] = useState(0)
    const [teams, setWorkedInTeam] = useState(0)
    const [managementOrTechnical, setManagementOrTechnical] = useState(0)
    const [introvert, setIntrovert] = useState(0)

    const evaluateSurvey = () => {
        if (
            hours == "" ||
            hackathons == "" ||
            codingSkill == "" ||
            publicSpeaking == "" ||
            overtime == "" ||
            selfLearning == "" ||
            extraCourses == "" ||
            certifications == "" ||
            workshops=="" ||
            talentTest == "" ||
            languageSkills == "" ||
            memory == "" ||
            subject == "" ||
            career == "" ||
            jobOrStudies == "" ||
            company == "" ||
            seniors == "" ||
            games == "" ||
            behaviour == "" ||
            managementOrTechnical == "" ||
            salaryOrWork == "" ||
            hardOrSmart == "" ||
            teams == "" ||
            introvert == ""
        ) {
            alert("Please fill all entries")
        } else {
            const surveyMapGrad = new Map([
                ["hours", parseInt(hours)],
                ["hackathons", parseInt(hackathons)],
                ["codingSkill", parseInt(codingSkill)],
                ["publicSpeaking", parseInt(publicSpeaking)],
                ["workLongTime", parseInt(workLongTime)],
                ["selfLearning", parseInt(selfLearning)],
                ["extraCourses", parseInt(extraCourses)],
                ["certifications", parseInt(certifications)],
                ["workshops", parseInt(workshops)],
                ["talentTest", parseInt(talentTest)],
                ["languageSkills", parseInt(languageSkills)],
                ["memory", parseInt(memory)],
                ["subject", parseInt(subject)],
                ["career", parseInt(career)],
                ["jobOrStudies", parseInt(jobOrStudies)],
                ["company", parseInt(company)],
                ["seniors", parseInt(seniors)],
                ["games", parseInt(games)],
                ["behaviour", parseInt(behaviour)],
                ["managementOrTechnical", parseInt(managementOrTechnical)],
                ["salaryOrWork", parseInt(salaryOrWork)],
                ["hardOrSmart", parseInt(hardOrSmart)],
                ["teams", parseInt(teams)],
                ["introvert", parseInt(introvert)],
            ])

            if (typeof window !== "undefined") {
                localStorage.setItem(
                    "surveyMapGrad",
                    JSON.stringify(Object.fromEntries(surveyMapGrad))
                )
            }

            router.push("/aptitude/grad")
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
                <h1>Introduction</h1>
                <h2 style={{marginTop: 0 }}>Tell me a bit about yourself</h2>
            </div>
            <SurveyInputChoiceComponent
                question={"Gender"}
                options={{ Male: 0, Female: 1, Other: 1 }}
                getData={setGender}
            />
            <SurveyInputSliderComponent
                question={"How many hours are you willing to work per day?"}
                max={12}
                min={6}
                getData={setHours}
            />
            <SurveyInputSliderComponent
                question={
                    "On a scale of 0 to 10 how do you rate your experience of participating in Hackathons (0 being never and 10 being very experienced)"
                }
                max={10}
                min={0}
                getData={setHackathon}
            />
            <SurveyInputSliderComponent
                question={
                    "On a scale of 1 to 10 how do you rate your skill in Programming  (1 being the lowest score and 10 being the highest score)"
                }
                max={10}
                min={1}
                getData={setCoding}
            />
            <SurveyInputSliderComponent
                question={
                    "On a scale of 1 to 10 how do you rate your skill in Public Speaking  (1 being the lowest score and 10 being the highest score)"
                }
                max={10}
                min={1}
                getData={setPublicSpeak}
            />
            <SurveyInputChoiceComponent
                question={"Are you willing to work overtime if required?"}
                options={{ Yes: 1, No: 0 }}
                getData={setOvertime}
            />
            <SurveyInputChoiceComponent
                question={"Are you capable of Self Learning?"}
                options={{ Yes: 1, No: 0 }}
                getData={setSelfLearn}
            />
            <SurveyInputChoiceComponent
                question={"Have you taken any extra courses for skill development?"}
                options={{ Yes: 1, No: 0 }}
                getData={setCourse}
            />
            <SurveyInputChoiceComponent
                question={"Do you have certifications in any of the below mentioned fields?"}
                options={{
                    "Shell Programming": 0,
                    "Machine Learning": 1,
                    "App Development": 2,
                    "Python Programming": 3,
                    "R Programming": 4,
                    "Information Security": 5,
                    "Hadoop": 6,
                    "Distro Making": 7,
                    "Full Stack Development": 8,
                    "Nil": 9,
                }}
                getData={setCertificate}
            />
            <SurveyInputChoiceComponent
                question={"Have you attended workshops in any of the below mentioned fields?"}
                options={{
                    "Cloud Computing": 0,
                    "Database Security": 1,
                    "Web Technologies": 2,
                    "Data Science": 3,
                    "Software Testing": 4,
                    "Ethical Hacking": 5,
                    "Game Development": 6,
                    "System Designing": 7,
                    "Nil":2
                }}
                getData={setWorkshop}
            />
            <SurveyInputChoiceComponent
                question={"Did you take any Talent tests? "}
                options={{ Yes: 1, No: 0 }}
                getData={setTalentTests}
            />
            <SurveyInputChoiceComponent
                question={"How do you rate your Language Skills?"}
                options={{ "Excellent": 2, "Medium": 1, "Poor":0 }}
                getData={setLangSkills}
            />
            <SurveyInputChoiceComponent
                question={"How do you rate your Memory Capability?"}
                options={{ "Excellent": 2, "Medium": 1, "Poor":0 }}
                getData={setMemoryCapability}
            />
            <SurveyInputChoiceComponent
                question={"Which of the following subjects are you Interested?"}
                options={{
                    "Cloud Computing": 0,
                    "Computer Networks": 1,
                    "Ethical Hacking": 2,
                    "Computer Architecture": 3,
                    "Programming": 4,
                    "Parallel Computing": 5,
                    "Internet Of Things": 6,
                    "Data Engineering": 7,
                    "Software Engineering": 8,
                    "Management Training": 9,
                    "Nil":4
                }}
                getData={setInterestedSubjects}
            />
            <SurveyInputChoiceComponent
                question={"Which of the following Career Titles are you Interested in?"}
                options={{
                    "System Developer": 0,
                    "Business process analyst": 1,
                    "Software Developement": 2,
                    "Software Tester": 3,
                    "Security Analyst": 4,
                    "Cloud Computing Developer": 5
                }}
                getData={setCareerTitles}
            />
            <SurveyInputChoiceComponent
                question={"Do you wish to get a Job or go for Higher Studies?"}
                options={{ "Job": 0, "Higher Studies": 1 }}
                getData={setJobOrHigher}
            />
            <SurveyInputChoiceComponent
                question={"Type of Company in which you wish to work: "}
                options={{
                    "Web Services": 0,
                    "SAaS services": 1,
                    "Sales and Marketing": 2,
                    "Testing and Maintainance Services": 3,
                    "product development": 4,
                    "BPA": 5,
                    "Service Based": 6,
                    "product Product based": 7,
                    "Cloud Services": 8,
                    "Finance": 9
                }}
                getData={setCompanyType}
            />
            <SurveyInputChoiceComponent
                question={
                    "Did you consult seniors for advice?"
                }
                options={{ Yes:1,No:0 }}
                getData={setSeniorsAdvice}
            />
            <SurveyInputChoiceComponent
                question={"Are you interested in games?"}
                options={{ Yes: 1, No: 0 }}
                getData={setGames}
            />
            <SurveyInputChoiceComponent
                question={"Are you a Stubborn person or a Gentle person?"}
                options={{ "Stubborn": 1, "Gentle": 0 }}
                getData={setStubbornOrGentle}
            />
            <SurveyInputChoiceComponent
                question={"Do you want to work in a Management or a Technical position?"}
                options={{ "Management": 0, "Technical": 1 }}
                getData={setManagementOrTechnical}
            />
            <SurveyInputChoiceComponent
                question={"Which one is more important for you, salary or work?"}
                options={{ "Salary": 0, "Work": 1 }}
                getData={setSalaryOrWork}
            />
            <SurveyInputChoiceComponent
                question={
                    "Are you a hard worker or a smart worker?"
                }
                options={{ "Hard": 0, "Smart": 1 }}
                getData={setHardOrSmart}
            />
            <SurveyInputChoiceComponent
                question={
                    "Have you ever worked in a team?"
                }
                options={{ Yes:1,No:0 }}
                getData={setWorkedInTeam}
            />
            <SurveyInputChoiceComponent
                question={
                    "Are you an Introvert?"
                }
                options={{ Yes:1,No:0 }}
                getData={setIntrovert}
            />
            <div className={styles.buttonPanel}>
                <button className={styles.buttonStyle} onClick={() => evaluateSurvey()}>
                    Proceed to aptitude test
                </button>
            </div>
        </div>
    )
}
