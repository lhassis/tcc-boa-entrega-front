import axios from 'axios';
import LocalStorageService from './service/localStorageService';

const username = 'admin'
const password = '1234'

const httpCliente = axios.create({
    baseURL: process.env.REACT_APP_URL_GATEWAY
})

class ApiService{

    constructor(apiUrl){
        this.apiUrl =apiUrl;
    }

    post(url, objeto){

        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

        //this.apiUrl='http://localhost:8088'
        return httpCliente.post(url, objeto,{
             
                headers: { 'Content-Type': 'multipart/form-data',
                 'Authorization': `Basic ${token}`
                } 
        }).catch((error) => {
            alert(error);
        });
    }

    put(url, objeto){
        return httpCliente.put(this.apiUrl+url, objeto);
    }

    delete(url){
        return httpCliente.delete(this.apiUrl+url);
    }

    get(url, customBaseUrl){
        const token = LocalStorageService.obterToken();
        try{
            return httpCliente.get(url, {headers: {'Accept': '*/*', 'Authorization': `Bearer ${token}`}, baseURL: this.apiUrl})
            .catch((error) => {
                alert(error);
            });
        } catch (error) {
            alert(error);
        }
    }
}

export default ApiService;