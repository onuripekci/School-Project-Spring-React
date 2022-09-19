import * as CryptoJS from 'crypto-js';
import { IJwt } from './models/IJwt';

const key = process.env.REACT_APP_KEY ? process.env.REACT_APP_KEY : 'coreappkey'
console.log(key)


export const encrypt = (plainText: string) => {
    const ciphertext = CryptoJS.AES.encrypt(plainText, key).toString();
    return ciphertext

}

export const decrypt = (ciphertext: string) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    const plainText = bytes.toString(CryptoJS.enc.Utf8);
    return plainText
}

export const control = (): IJwt | null => {
    const stEncData = sessionStorage.getItem('user')
    if (stEncData) {
        try {
            const stData=decrypt(stEncData)
            const jwt=JSON.parse(stData) as IJwt
            return jwt
        } catch (error) {
            sessionStorage.removeItem('user')
            
        }
    }
    return null
}