import ApiService from '../apiservice';

class PedidoService extends ApiService{

    constructor(){
        super('http://localhost:8082')
    }

    buscarNaoEntregues(){
        return this.get(`/pedidos/nao-entregues`);
    }

    buscaTeste() {
        return this.get('/pedido?id=1')
    }
}

export default PedidoService;