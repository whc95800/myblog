import axios from "axios";

export function getBlogList(pages){
  return axios({
    method:'get',
    url: '/api/blogList',
    headers:{
      Token:sessionStorage.getItem('token')
    },
    data: {
      page: pages.value.page,
      size: pages.value.size
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

export function getBlog(){
  return axios({
    method:'get',
    url: '/api/blog',
    headers:{
      Token:sessionStorage.getItem('token')
    },
    params:{id:''}
  })
}

export function userBlogCreat(blogForm) {
  return axios({
    method: 'post',
    url: '/api/blogCreat',
    headers:{
      Token:sessionStorage.getItem('token')
    },
    data: {
      title: blogForm.title,
      content: blogForm.content
    }
  })
}

export function userBlogEdit(blogForm) {
  return axios({
    method: 'post',
    url: '/api/blogEdit',
    headers:{
      Token:sessionStorage.getItem('token')
    },
    data: {
      title: blogForm.title,
      content: blogForm.content
    }
  })
}