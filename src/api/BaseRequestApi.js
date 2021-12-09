import axios from 'axios'
export const getReq = (url, params) => (axios.get(url, { params })) // 封装get请求函数
export const getReqREST = (url, pathData) => (axios.get(url+"/"+pathData)) // 封装getREST请求函数
export const postReq = (url, body) => (axios.post(url, body))// 封装post请求函数body
export const putReq = (url, pathData, body) => (axios.put(url + "/" + pathData, body))// 封装put请求函数
export const putReqBODY = (url, body) => (axios.put(url , body))// 封装put请求函数
export const deleteReqREST = (url, pathData) => (axios.delete(url+"/"+pathData))// 封装delete请求函数
export const deleteReq = (url, urlData) => (axios.delete(url+"?"+urlData))// 封装delete请求函数
