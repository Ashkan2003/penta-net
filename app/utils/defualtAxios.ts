import axios from "axios";
import { accessToken, baseUrl } from "../constants/env";

const defualtAxios = axios.create({
  baseURL: `${baseUrl}`,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    accept: "application/json",
  },
});

export default defualtAxios;
