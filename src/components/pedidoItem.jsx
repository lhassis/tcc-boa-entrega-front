import React, { useCallback } from "react";
import { Row } from "react-bootstrap";
import { useHistory } from "react-router";

function PedidoItem({codigo, destino}) {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push(`/rota-entrega/${codigo}`)
  }, [codigo]);

  return (
    
      <tr class="table-light">
        <th scope="row">{codigo}</th>
        <td>{destino}</td>
        <td><button class="btn btn-primary" onClick={handleClick}>Ver rota</button></td>
        <td><button class="btn btn-success" onClick={() => alert("não implmentado!")}>Confirmar entrega</button></td>
      </tr>
  );
}

export default PedidoItem;