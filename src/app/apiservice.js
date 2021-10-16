import axios from 'axios';
import LocalStorageService from './service/localStorageService';

const username = 'admin'
const password = '1234'

const httpCliente = axios.create({
    baseURL: 'http://localhost:8082'
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
        return httpCliente.get(url, {headers: {'Accept': '*/*', 'Authorization': `Bearer ${token}`}, baseURL: this.apiUrl});
    }
}

export default ApiService;