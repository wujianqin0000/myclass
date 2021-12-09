import { putReqBODY,putReq,getReq } from "../api/BaseRequestApi"
import {GEGINFOALL_BYID,UPDATEINFOALL_BYID,GET_INFOLIST} from "./AllApiUrl"
export const getInfoOne = (data) => { // 获取个人信息
return getReq(GEGINFOALL_BYID,data)

}
export const putInfoOne = (data) => { // 修改个人信息

return putReqBODY(UPDATEINFOALL_BYID,data)

}

export const getPicListApi= ()=>{ // 获取全部信息列表
    return getReq(GET_INFOLIST);
 }
