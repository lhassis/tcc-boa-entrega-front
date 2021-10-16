import React, { useEffect, useState } from "react";
import PedidoService from "../app/service/pedidoService";
import PedidoItem from "../components/pedidoItem";

const service = new PedidoService();

function Pedidos() {
  const [dataSource, setDataSource] = useState();
  useEffect(async () => {
    // const teste = await service.buscaTeste();
    const naoEntregues = await service.buscarNaoEntregues();
    setDataSource(naoEntregues.data);
  }, []);

  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Código</th>
          <th scope="col">Destino</th>
          <th scope="col">Rota</th>
        </tr>
      </thead>
      <tbody>
      {dataSource?.map((pedido) => (
        <PedidoItem codigo={pedido.numeroPedido} destino={pedido.destino} />
      ))}
      </tbody>
    </table>
  );
}

export default Pedidos;