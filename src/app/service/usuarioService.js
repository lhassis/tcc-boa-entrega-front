import ApiService from '../apiservice';
import apiService from '../apiservice';

class UsuarioService extends ApiService{

    constructor(){
        super()
    }

    autenticar(credenciais){
        return this.post('/autenticar', credenciais);
    }

    obterSaldoPorUsuario(id){
        return this.get(`/${id}/saldo`)
    }

    logar(usuario, senha){
        var bodyFormData = new FormData();
        bodyFormData.append('username', usuario)
        bodyFormData.append('password', senha)
        bodyFormData.append('grant_type', 'password')
        bodyFormData.append('scope', 'web')    
    return this.post('/oauth/token', bodyFormData)
    }
}

export default UsuarioService;