import React, { useCallback } from "react";
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
      <td><button class="brn btn-primary" onClick={handleClick}>Ver rota</button></td>
    </tr>
  );
}

export default PedidoItem;