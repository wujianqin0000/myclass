import { postReq, putReq, getReq, deleteReq } from "../api/BaseRequestApi"

export const VERIFY_CODE_URL = 'http://localhost:8088/captcha.jpg?token='
export const LoginPost = (data) => { //登入接口
   const url= "/sys/login"
return postReq(url,data)
 }