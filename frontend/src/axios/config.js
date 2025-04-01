import axios from "axios"

const partyFetch = axios.create({
    baseURL: "http://localhost:3000/api/",
    headers:{
        "Content-Type": "Application/json"
    }
})

export default partyFetch