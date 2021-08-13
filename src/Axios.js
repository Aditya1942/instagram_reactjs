import axios from "axios";
// const URL = "http://192.168.1.172:80/api/v1/";
const URL = "https://doorsmash.in/api/v1/";
export const CancelToken = axios.CancelToken;

const instance = axios.create({
  baseURL: URL,
  validateStatus: function (status) {
    return status >= 200 && status <= 500; // default
  },
});
export default instance;
