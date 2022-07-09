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
        // .then((response) => {
        //     if (response.ok == false) alert("not ok")
        //     response.text()
        // })
        // .then((data) => {
        //     if (response.ok == false) alert(data)
        //     else alert("user created")
        // })
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
