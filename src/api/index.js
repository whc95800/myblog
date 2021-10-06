import axios from "axios";

export function getBlogList(token){
  return axios({
    method:'get',
    url: '/',
    headers:{
      Token:token
    }
  })
}
