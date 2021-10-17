import ApiService from '../apiservice';

class RotaEntregaService extends ApiService{

    constructor(){
        super()
    }

    buscaRota(id){
        return this.get(`/rotas/${id}`);
    }
}

export default RotaEntregaService;