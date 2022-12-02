import { BASE_URL, requestHeader } from "./network"

export const fetchResultTen = async (request) => {
    try {
        const response = await fetch(BASE_URL + "/api/result/ten/" + request, {
            mode: "cors",
            method: "GET",
            headers: requestHeader
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

export const fetchResultTwelve = async (request) => {
    try {
        const response = await fetch(BASE_URL + "/api/result/twelve/" + request, {
            mode: "cors",
            method: "GET",
            headers: requestHeader
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

export const fetchResultBtech = async(request) => {
    try{
        const response = await fetch(BASE_URL+"/api/result/btech"+request,{
            mode:"cors",
            method:"GET",
            headers:requestHeader
        })

        if(response.ok){
            let resultData = await response.json()
            return resultData
        }else{
            alert("Error fetching result")
        }
    }catch(error){
        console.log(error)
    }
}
