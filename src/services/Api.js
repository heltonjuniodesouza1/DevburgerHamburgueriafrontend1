import axios from "axios";


export const Api = axios.create({
    baseURL: 'https://devburgerhamburgueriabackend1-production.up.railway.app/'
})

Api.interceptors.request.use((config)=>{
    const userData  = localStorage.getItem('devburger:userData')
    const token = userData && JSON.parse(userData).token

    config.headers.Authorization = `Bearer ${token}`
 return config
})