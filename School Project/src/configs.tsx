import axios from "axios";
import { control } from "./util";


const baseURL = 'http://localhost:8092/'
const proxy = {host: 'localhost' , port:3000,protocol:'http'}
const timeout=15000

export const userConfig = axios.create({
    baseURL:baseURL,
    //proxy:proxy,
    timeout:15000
})

export const siteConfig = axios.create({
    baseURL:baseURL,
    timeout:15000,
    headers: {'Authorization' :'Beer ' +control()?.jwt}
})