import React from "react"
import Image from "next/image"
import logo from "../assets/logo-circle.png"
import styles from "../styles/LogoComponent.module.css"

export const Logo = () => {
    return (
        <div className={styles.main}>
            <div className={styles.imageStyle}>
                <Image src={logo} alt="image" />
            </div>
            <h1>Invinium</h1>
        </div>
    )
}
