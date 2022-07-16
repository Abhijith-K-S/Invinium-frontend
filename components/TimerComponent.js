import { Router } from "next/router"
import { useTimer } from "react-timer-hook"
import { useRouter } from "next/router"

export const Timer = ({ expiryTimestamp, expiryAction }) => {
    const router = useRouter()
    const { seconds, minutes, hours } = useTimer({
        expiryTimestamp,
        onExpire: () => {
            expiryAction()
        }
    })

    const formatTime = (time) => {
        return String(time).padStart(2, "0")
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Time remaining</h2>
            <div style={{ fontSize: "50px" }}>
                <span>{formatTime(hours)}</span>:<span>{formatTime(minutes)}</span>:
                <span>{formatTime(seconds)}</span>
            </div>
        </div>
    )
}
