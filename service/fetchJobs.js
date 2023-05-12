import { BASE_URL, requestHeader } from "./network"

export const fetchJobs = async (request) => {
    try {
        const response = await fetch(BASE_URL + "/api/jobs?keyword=" + request, {
            mode: "cors",
            method: "GET",
            headers: requestHeader
        })

        if (response.ok) {
            let jobsData = await response.json()
            return jobsData
        } else {
            alert("Error fetching questions")
        }
    } catch (error) {
        console.log(error)
    }
}
