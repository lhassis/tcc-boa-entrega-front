import ApiService from '../apiservice';

class RotaEntregaService extends ApiService{

    constructor(){
        super('http://localhost:8082')
    }

    buscaRota(id){
        return this.get(`/rotas/${id}`);
    }
}

export default RotaEntregaService;