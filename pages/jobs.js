import Head from "next/head"
import { useRouter } from "next/router"
import React, { useState } from "react"
import styles from "../styles/jobs.module.css"
import data from "../temp.json"

export default function Jobs() {

    const router = useRouter()
    
    if (!data) return <div>Loading...</div>;


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
                <div className={styles.header}><h2>Here are some jobs relevant to your predicted career path</h2></div>
                <div className={styles.layout}>
                    <div className={styles.box}>
                        {Object.keys(data).map(key => {
                            const job = data[key];
                            const skillArray=job.skills.split(",");
                            return (
                                <a href={job.job_url}>
                                    <div className={styles.boxy}>
                                        <h3 className={styles.company}>{job.company.toUpperCase()}</h3>
                                        <img
                                            src="/loc.svg"
                                            width={30}
                                            height={30}
                                            align="left" 
                                        />
                                        <p className={styles.loc}>{job.Location}</p>
                                        <div key={job} className={styles.skills}>
                                            <h4>Skills Required: </h4>
                                            <div>{skillArray.map((skill)=>{
                                                        return <span className={styles.skillsep}>{skill.trim()}</span>;
                                            })}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
            
        </>
    )
}
