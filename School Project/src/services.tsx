import { siteConfig, userConfig } from "./configs"
import { IJwt } from "./models/IJwt"

export const UserLogin =(username:string,password:string) => {

const sendData ={
    username:username,
    password:password
}
 return  userConfig.post<IJwt>('user/auth', sendData)

}

export const managerGet = () =>{
    return siteConfig.get('manager/get')
}