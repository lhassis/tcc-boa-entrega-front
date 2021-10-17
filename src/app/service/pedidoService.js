import ApiService from '../apiservice';

class PedidoService extends ApiService{

    constructor(){
        super()
    }

    buscarNaoEntregues(){
        return this.get(`/pedidos/nao-entregues`);
    }

    buscaTeste() {
        return this.get('/pedido?id=1')
    }
}

export default PedidoService;