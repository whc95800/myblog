import axios from "axios";

export function getBlogList(pages){
  return axios({
    method:'get',
    url: '/api/blogList',
    headers:{
      Token:sessionStorage.getItem('token')
    },
    params: {
      size: pages.value.size,
      page: pages.value.page
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

export function getBlog(blogId){
  return axios({
    method:'get',
    url: '/api/blog',
    headers:{
      Token:sessionStorage.getItem('token')
    },
    params:{id:blogId}
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

export function userBlogEdit(blog) {
  return axios({
    method: 'post',
    url: '/api/blogEdit',
    headers:{
      Token:sessionStorage.getItem('token')
    },
    data: {
      title: blog.title,
      content: blog.content,
      id: blog.id
    }
  })
}

export function blogRemove(removeId) {
  return axios({
    method: 'post',
    url: '/api/blogRemove',
    headers:{
      Token:sessionStorage.getItem('token')
    },
    data: {
      id: removeId
    }
  })
}