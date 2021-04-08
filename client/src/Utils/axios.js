import axios from "axios"

const instance = axios.create({
    baseURL : 'http://localhost:5001/baked-by-berry/us-central1/api'
})

export default instance;