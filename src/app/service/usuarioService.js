import ApiService from '../apiservice';
import LocalStorageService from './localStorageService';

class UsuarioService extends ApiService{

    constructor(){
        super()
    }

    autenticar(credenciais){
        return this.post('/autenticar', credenciais);
    }

    logar(usuario, senha){
        var bodyFormData = new FormData();
        bodyFormData.append('username', usuario)
        bodyFormData.append('password', senha)
        bodyFormData.append('grant_type', 'password')
        bodyFormData.append('scope', 'web')    
        return this.post('/oauth/token', bodyFormData)
    }

    logado() {
        return !!LocalStorageService.obterToken();
    }
}

export default UsuarioService;