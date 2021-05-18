import axios from "axios";
import { BACK_URL } from "../constant/constant";

axios.defaults.baseURL = `${BACK_URL}`;
// axios.defaults.withCredentials = true;

const client = axios.create();

export default client;
