import axios from "axios";
import { BASE_URL } from "@/utils/config";

export const request = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
    },
});