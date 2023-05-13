import Head from "next/head"
import React, { useState, useEffect } from "react"
import styles from "../styles/jobs.module.css"
import { Bars } from "react-loading-icons"
import { fetchJobs } from "../service/fetchJobs"

export default function Jobs() {
    const [jobsList, setJobsList] = useState([])

    const getJobs = async () => {
        try {
            if (typeof window !== "undefined") {
                let keyword = localStorage.getItem("jobKeyword")
                console.log(keyword)
                var jobsList = await fetchJobs(keyword)
                setJobsList(jobsList)
            }
        } catch (error) {
            alert("Error fetching jobs")
        }
    }

    useEffect(() => {
        getJobs()
    }, [])

    return (
        <>
            <Head>
                <title>Jobs</title>
                <meta name="Invinium" content="Jobs" />
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <div className={styles.top}>
                <h3>Jobs</h3>
            </div>
            <div>
                <div className={styles.header}>
                    <h2>Here are some jobs relevant to your predicted career path</h2>
                </div>
                <div className={styles.layout}>
                    {jobsList.length !== 0 ? (
                        <div className={styles.box}>
                            {Object.keys(jobsList).map((key) => {
                                const job = jobsList[key]
                                const skillArray = job.skills.split(",")
                                return (
                                    <div className={styles.boxy} key={key}>
                                        <a href={job.job_url} rel="noreferrer" target="_blank">
                                            <div>
                                                <img
                                                    src="/building-solid.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="company"
                                                    align="left"
                                                />
                                                <h3 className={styles.company}>
                                                    {job.company.toUpperCase()}
                                                </h3>
                                            </div>
                                            <div>
                                                <img
                                                    src="/loc.svg"
                                                    width={30}
                                                    height={30}
                                                    alt="location"
                                                    align="left"
                                                />
                                                <p className={styles.loc}>
                                                    {job.Location ? job.Location : "-"}
                                                </p>
                                            </div>
                                            <div key={job} className={styles.skills}>
                                                <h4>Skills Required: </h4>
                                                <div className={styles.skillsitem}>
                                                    {skillArray.map((skill) => {
                                                        return (
                                                            <span
                                                                className={styles.skillsep}
                                                                key={skill}
                                                            >
                                                                {skill.trim()}
                                                            </span>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    ) : (
                        <Bars
                            className={styles.loadingIcon}
                            stroke="#00000020"
                            fill="#000000"
                            fillOpacity={"#000000"}
                            height="50"
                            width="50"
                        />
                    )}
                </div>
            </div>
        </>
    )
}
