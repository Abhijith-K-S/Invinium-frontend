import { BASE_URL, requestHeader } from "./network"

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
            alert("Invalid credentials")
        }
    } catch (error) {
        console.log(error.message)
        if (error.message == "Failed to fetch")
            throw new Error("Unable to communicate with server!")
        else 
            throw new Error(error.message)
    }
}