import { postReq, putReq, getReq, deleteReq } from "../api/BaseRequestApi"

export const VERIFY_CODE_URL = 'http://121.40.99.230:8088/captcha.jpg?token='
export const LoginPost = (data) => { //登入接口
   const url= "https://httpslogin.wujianqin.xyz"
return postReq(url,data)
 }