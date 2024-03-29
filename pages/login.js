import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { Bars } from "react-loading-icons"
import CustomInputComponent from "../components/CustomInputComponent"
import styles from "../styles/login.module.css"
import { loginUser } from "../service/authService"
import { Logo } from "../components/LogoComponent"

export default function Home() {
    const router = useRouter()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(0)

    async function processLogin() {
        setIsLoading(1)
        if (username == "" || password == "") {
            alert("Please fill all the fields!")
        } else {
            const request = JSON.stringify({
                username: username,
                password: password
            })
            try {
                var token = await loginUser(request)
                if (token) {
                    if (typeof window !== "undefined") {
                        localStorage.setItem("username", username)
                        localStorage.setItem("token", token)
                    }
                    router.push("/intro")
                }
            } catch (error) {
                alert(error.message)
            }
        }
        setIsLoading(0)
    }

    return (
        <>
            <Head>
                <title>Invinium: Login</title>
                <meta name="Invinium" content="Login" />
                <link rel="icon" href="./favicon.ico" />
            </Head>
            <div className={styles.card}>
                <div className={styles.cardLeft}>
                    <div className={styles.imageStyle}>
                        <Image
                            src="/cg.png"
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
                    <div className={styles.logoStyle}>
                        <Logo />
                    </div>
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
                    <Bars
                        className={styles.loadingIcon}
                        stroke="#00000020"
                        fill="#ffffff"
                        fill-opacity={isLoading}
                        height="30"
                        width="30"
                    />
                    <div className={styles.acclink}>
                        <h4 className={styles.account}>{"Don't have an account?"}</h4>
                        <Link href="/registration">
                            <a className={styles.alink}>Create Account</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
