import { postReq, putReq, getReq, deleteReq } from "../api/BaseRequestApi"
import {HTTPS_LOGIN } from "./AllApiUrl"

export const LoginPost = (data) => { //登入接口请求api
return postReq(HTTPS_LOGIN,data)
 }