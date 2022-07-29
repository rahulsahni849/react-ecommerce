import axios from "axios";
const BASE_URL = "http://192.168.217.193:5000/api";
const TOKEN = ""


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
})