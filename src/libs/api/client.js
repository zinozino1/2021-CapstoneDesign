import axios from "axios";
import { BACK_URL } from "../constant/constant";

/**
 * @author 박진호
 * @version 1.0
 * @summary axios 기본 설정
 */

axios.defaults.baseURL = `${BACK_URL}`;

const client = axios.create();

export default client;
