import { BASE_URL, requestHeader } from "./network"

export const fetchResultTen = async (username, resultMap) => {
    try {
        const response = await fetch(BASE_URL + "/api/result/ten/", {
            mode: "cors",
            method: "PUT",
            headers: requestHeader,
            body: JSON.stringify({
                username: username,
                resultMap: resultMap
            })
        })

        if (response.ok) {
            let resultData = await response.json()
            return resultData
        } else {
            alert("Error fetching result")
        }
    } catch (error) {
        console.log(error)
    }
}

export const fetchResultTwelve = async (username, resultMap) => {
    try {
        const response = await fetch(BASE_URL + "/api/result/twelve/", {
            mode: "cors",
            method: "PUT",
            headers: requestHeader,
            body: JSON.stringify({
                username: username,
                resultMap: resultMap
            })
        })

        if (response.ok) {
            let resultData = await response.json()
            return resultData
        } else {
            alert("Error fetching result")
        }
    } catch (error) {
        console.log(error)
    }
}

export const fetchResultEngg = async (username, resultMap) => {
    try {
        const response = await fetch(BASE_URL + "/api/result/btech/", {
            mode: "cors",
            method: "PUT",
            headers: requestHeader,
            body: JSON.stringify({
                username: username,
                resultMap: resultMap
            })
        })

        if (response.ok) {
            let resultData = await response.json()
            return resultData
        } else {
            alert("Error fetching result")
        }
    } catch (error) {
        console.log(error)
    }
}
