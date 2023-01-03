import axios from "axios";

export const LOGIN_API=axios.create({
  baseURL:'http://localhost:8080',
  headers:{
    'Content-Type': 'application/json'
  }
})
const getToken=localStorage.getItem('token')

export const TODO_API=axios.create({
  baseURL:'http://localhost:8080',
  headers:{
    "Authorization":getToken
  }
})
