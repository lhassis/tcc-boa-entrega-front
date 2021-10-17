import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import PedidoService from "../app/service/pedidoService";
import PedidoItem from "../components/pedidoItem";

const service = new PedidoService();

function Pedidos() {
  const [dataSource, setDataSource] = useState();
  useEffect(async () => {
    const naoEntregues = await service.buscarNaoEntregues();
    setDataSource(naoEntregues.data);
  }, []);

  return (
    <>
      <div style={{display: 'flex'}}>
        Registrar pedido para entrega
        <input placeholder="Código do pedido" />
        <div className="col-md-2"><button class="btn btn-primary" onClick={() => alert("não implmentado!")}>Registrar</button></div>
      </div>
      
      <Row>
        <h3>Pedidos em entrega</h3>
      </Row>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Destino</th>
            <th scope="col">Rota</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
        {dataSource?.map((pedido) => (
          <PedidoItem codigo={pedido.numeroPedido} destino={pedido.destino} />
        ))}
        </tbody>
      </table>
    </>
  );
}

export default Pedidos;