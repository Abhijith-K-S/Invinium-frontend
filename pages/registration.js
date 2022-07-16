import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import React, { useState } from "react"
import styles from "../styles/registration.module.css"
import CustomInputComponent from "../components/CustomInputComponent"
import handshake from "../assets/handshake.jpg"
import { registerUser } from "../service/authService"

export default function Registration() {
    const router = useRouter()

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    async function processRegistration() {
        if (
            firstname == "" ||
            lastname == "" ||
            username == "" ||
            email == "" ||
            password == "" ||
            confirmPassword == ""
        ) {
            alert("Please fill all the fields!")
        } else if (password != confirmPassword) alert("Please check password!")
        else {
            const request = JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                username: username,
                email: email,
                password: password
            })
            try {
                var response = await registerUser(request)
                if (response) router.push("/intro")
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <div className={styles.main}>
            <Head>
                <title>Invinium: User Registration</title>
                <meta name="Invinium" content="User registration" />
                <link rel="icon" href="./favicon.ico" />
            </Head>

            <div className={styles.card}>
                <div className={styles.cardLeft}>
                    <div className={styles.imageStyle}>
                        <Image
                            src={handshake}
                            alt="image"
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            layout="responsive"
                        />
                    </div>
                </div>

                <div className={styles.cardRight}>
                    <div className={styles.heading}>
                        <h2 className={styles.headingText}>User registration</h2>
                    </div>

                    <div className={styles.listStyle}>
                        <CustomInputComponent
                            input="First Name"
                            getData={setFirstName}
                            isHidden={false}
                        />
                        <CustomInputComponent
                            input="Last Name"
                            getData={setLastname}
                            isHidden={false}
                        />
                    </div>
                    <CustomInputComponent input="Username" getData={setUsername} isHidden={false} />
                    <CustomInputComponent input="E-mail" getData={setEmail} isHidden={false} />
                    <CustomInputComponent input="Password" getData={setPassword} isHidden={true} />
                    <CustomInputComponent
                        input="Confirm password"
                        getData={setConfirmPassword}
                        isHidden={true}
                    />
                    <h6 style={{ color: "#f5f5f5", marginLeft: 20 }}>
                        Note: Password must contain atleast an uppercase letter, a lowercase letter,
                        a digit and a special character
                    </h6>

                    <button className={styles.buttonStyle} onClick={() => processRegistration()}>
                        Register
                    </button>
                </div>
            </div>
        </div>
    )
}
