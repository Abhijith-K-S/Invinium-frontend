import { BASE_URL, requestHeader } from "./network"

export const fetchQuestionTen = async (request) => {
    try {
        const response = await fetch(BASE_URL + "/api/question/ten", {
            mode: "cors",
            method: "GET",
            headers: requestHeader
        })

        if (response.ok) {
            let questionData = await response.json()
            return questionData
        } else {
            alert("Error fetching questions")
        }
    } catch (error) {
        console.log(error)
    }
}

export const fetchQuestionTwelve = async (request) => {
    try {
        const response = await fetch(BASE_URL + "/api/question/twelve/" + request, {
            mode: "cors",
            method: "GET",
            headers: requestHeader
        })

        if (response.ok) {
            let questionData = await response.json()
            return questionData
        } else {
            alert("Error fetching questions")
        }
    } catch (error) {
        console.log(error)
    }
}

export const fetchQuestionEngg = async (request) => {
    console.log(request)
    try {
        const response = await fetch(BASE_URL + "/api/question/btech", {
            mode: "cors",
            method: "GET",
            headers: requestHeader
        })

        if (response.ok) {
            let questionData = await response.json()
            return questionData
        } else {
            alert("Error fetching questions")
        }
    } catch (error) {
        console.log(error)
    }
}
