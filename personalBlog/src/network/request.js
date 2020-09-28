import axios from 'axios'
export function request(config){
   
    const instance = axios.create({
                // baseURL:"http://47.111.191.11:3000/",
                baseURL:"http://localhost:3000",
                timeout:60000,
    })
    return instance(config)
}