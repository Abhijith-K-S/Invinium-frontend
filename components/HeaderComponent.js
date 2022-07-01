import Image from "next/image"
import logo from "../assets/logo-circle.png"
import styles from "../styles/HeaderComponent.module.css"

export default function HeaderComponent() {
    return (
        <div>
            <div className={styles.headerComponentStyle}>
                <Image src={logo} alt="Invinium logo" width={32} height={32} />
            </div>
        </div>
    )
}
