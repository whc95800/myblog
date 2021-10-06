import axios from "axios";

export function getBlogList(){
  return axios({
    method:'get',
    url: '/api/blogList',
    headers:{
      Token:sessionStorage.getItem('token')
    }
  })
}

export function userLogin(form) {
    return axios({
      method: 'post',
      url: '/api/login',
      data: {
        account: form.account,
        password: form.password
      }
    })
}

export function userRegister(form) {
  return axios({
    method:'post',
    url: '/api/register',
    data: {
      account: form.account,
      password: form.password
    }
  })
}
