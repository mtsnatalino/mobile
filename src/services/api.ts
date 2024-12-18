import axios from "axios";

export const api = axios.create({
    baseURL: "http://192.168.3.9:3333",
    timeout: 5000,
})