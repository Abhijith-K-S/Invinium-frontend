const BASE_URL = "http://127.0.0.1:8080"

const requestHeader = new Headers()
requestHeader.append("Content-Type", "application/json")

export const registerUser = async (request) => {
    try {
        const response = await fetch(BASE_URL + "/api/user/register", {
            mode: "cors",
            method: "POST",
            headers: requestHeader,
            body: request
        })

        if (response.ok) {
            let json = await response.json()
            return json
        } else {
            let msg = await response.text()
            alert(msg)
        }
    } catch (error) {
        console.error(error)
    }
}

export const loginUser = async (request) => {
    try {
        const response = await fetch(BASE_URL + "/api/user/login", {
            mode: "cors",
            method: "POST",
            headers: requestHeader,
            body: request
        })

        if (response.ok) {
            let token = await response.text()
            return token
        } else {
            alert("Login error")
        }
    } catch (error) {
        console.error(error)
    }
}
