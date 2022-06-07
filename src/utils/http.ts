/**
 * 网络请求配置
 */
import axios from 'axios'

axios.defaults.timeout = 100000
axios.defaults.baseURL = 'http://localhost:8080/'
axios.defaults.headers = {
    ...axios.defaults.headers,
    ...{ 'Content-Type': 'application/json' },
}
/**
 * http request 拦截器
 */
axios.interceptors.request.use(
    (config) => {
        config.data = JSON.stringify(config.data)
        config.headers = {
            Authorization: 'sdfsdf',
        }
        return config
    },
    (error) => {
        return Promise.reject()
    }
)

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
    (response) => {
        console.log(response)
        if (response.data.errCode === 2) {
            console.log('过期')
        }
        return response
    },
    (error) => {
        return Promise.reject(error.message?.toString() || error)
    }
)

/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function get(url: string, params = {}) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params,
            })
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url: string, data: Object) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            (response) => {
                //关闭进度条
                resolve(response.data)
            },
            (err) => {
                reject(err)
            }
        )
    })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url: string, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data).then(
            (response) => {
                resolve(response.data)
            },
            (err) => {
                reject(err)
            }
        )
    })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url: string, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(
            (response) => {
                resolve(response.data)
            },
            (err) => {
                reject(err)
            }
        )
    })
}

//统一接口处理，返回数据
const http = (fecth: string, url: string, param = {}) => {
    let _data = ''
    let func
    switch (fecth) {
        case 'get':
            func = get(url, param)
            break
        case 'post':
            func = post(url, param)
            break
        default:
            func = get(url, param)
            break
    }
    return func
}

export default http
