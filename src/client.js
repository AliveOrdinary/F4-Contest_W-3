import axios from "axios"

export const client = axios.create({
    baseURL: "http://www.omdbapi.com/?i=tt3896198&apikey=e789ba40",
})