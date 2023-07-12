import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'


// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

service.defaults.baseURL="http://43.142.103.66:8800"