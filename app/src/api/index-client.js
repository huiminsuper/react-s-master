import axios from 'axios'
import qs from 'qs'
import config from './config-client'

axios.interceptors.request.use(config => {
  console.log('config :', config);
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))

function checkStatus(response) {
    if (response && (response.status === 200 || response.status === 304)) {
        return response
    }
   if(response && response.data){
     const message = `[${response.data.status}] - ${response.data.error}: ${response.data.message}`
     console.error(message)
     return {
       status: response.data.status,
       message: message,
       exception: response.data.exception,
       path: response.data.path
     }
   }
   return {
     status: 'error',
     message: 'response is: '+ response,
     exception: 'error',
     path: 'null'
   }
}


export default {
    post(url, data, xform=false) {
      console.log("POST:"+ url )
      console.log(data)
      let xdata = data
      let contentType = "application/json;text/plain; charset=UTF-8"
      if(xform) {
        xdata = qs.stringify(data)
        contentType = "application/x-www-form-urlencoded;"+contentType
      }
        return axios({
            method: 'post',
            url: url,
            data: xdata,
            timeout: config.timeout,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                // 'Access-Control-Allow-Origin':'*',
              'Content-Type': contentType

            }
        }).then(checkStatus)
    },
    get(url, params) {
    //  console.log("GET :"+ url + "?"+params)
      return axios({
        method: 'get',
        url: url,
        params,
        timeout: config.timeout,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(checkStatus)
    },
    delete(url, params) {
      console.log("DELETE :"+ url + "?"+params)
      return axios({
        method: 'delete',
        url: url,
        params,
        timeout: config.timeout,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(checkStatus)
    }
}
