import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import CustomInputComponent from "../components/CustomInputComponent"
import styles from "../styles/login.module.css"
import { loginUser } from "../service/authService"

export default function Home() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function processLogin() {
        if (username == "" || password == "") {
            alert("Please fill all the fields!")
        } else {
            const request = JSON.stringify({
                username: username,
                password: password
            })
            try {
                var token = await loginUser(request)
            } catch (error) {
                console.error(error)
            }
        }
    }
    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardLeft}>
                    <div className={styles.imageStyle}>
                        <Image
                            src="/bg.jpg"
                            alt="image"
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            layout="responsive"
                        />
                    </div>
                </div>

                <div className={styles.cardRight}>
                    {/* <div className={styles.heading}>
                    <h2 className={styles.headingText}>User Login</h2>
                </div> */}
                    <div className="input">
                        <CustomInputComponent
                            input="Username"
                            getData={setUsername}
                            isHidden={false}
                        />
                    </div>
                    <div className="input">
                        <CustomInputComponent
                            input="Password"
                            getData={setPassword}
                            isHidden={true}
                        />
                    </div>

                    <button className={styles.buttonStyle} onClick={() => processLogin()}>
                        Login
                    </button>

                    <h4 className={styles.account}>{"Don't have an account?"}</h4>

                    <div className={styles.alink}>
                        <Link href="/registration">
                            <a>Create Account</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
