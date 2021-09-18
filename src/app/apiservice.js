import axios from 'axios';

const username = 'admin'
const password = '1234'

const httpCliente = axios.create({
    baseURL: 'http://localhost:8088'
})

class ApiService{

    constructor(apiUrl){
        this.apiUrl =apiUrl;
    }

    post(url, objeto){

        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

        const auth = {
            username : 'admin',
            password : '1234'
        }
        this.apiUrl='http://localhost:8088'
        return axios.post(this.apiUrl+url, objeto,{
             
                headers: { 'Content-Type': 'multipart/form-data',
                 'Authorization': `Bearer ${token}`} 
        });
    }

    put(url, objeto){
        return httpCliente.put(this.apiUrl+url, objeto);
    }

    delete(url){
        return httpCliente.delete(this.apiUrl+url);
    }

    get(url){
        return httpCliente.get(this.apiUrl+url);
    }
}

export default ApiService;