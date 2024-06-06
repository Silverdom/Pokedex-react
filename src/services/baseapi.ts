import { env } from "@/constants/config";
import axios from "axios";

export const baseApi = axios.create({
  baseURL: env.VITE_POKEAPI_BASE_URL,
  withCredentials: true,
});
