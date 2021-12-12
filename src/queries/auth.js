import axios from "axios"
import {LOGIN_BASE_URL} from "config/constants"

const auth_token=localStorage.auth_token

const postLogin = (payload) => {
    return axios.post(`${LOGIN_BASE_URL}signIn`, payload, {
        headers: {
            "x-auth-token": auth_token
        }
    })
    .then((response) => response)
    .catch((err) => err.response)
}
export default postLogin