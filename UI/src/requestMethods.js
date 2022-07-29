import axios from "axios";
import { useSelector } from 'react-redux'

const BASE_URL = "http://localhost:5000/api";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = (token) => axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${token}` },
})