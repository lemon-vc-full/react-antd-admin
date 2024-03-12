import { request } from 'utils/net/request'

export function login(data: any) {
    return new Promise((resolve, reject) => {
        request.post('/user/login', data).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}