import React, { useCallback, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router";
import RotaEntregaService from "../app/service/rotaEntregaService";
import MapContainer from "../components/MapContainer";

const rotaService = new RotaEntregaService();

function RotaEntrega() {
  const [directions, setDirections] = useState();
  const {codigo} = useParams();

  const carregarRota = useCallback(async () => {
    if (codigo) {
      const result = await rotaService.buscaRota(codigo);
      console.log({result})
      setDirections(result.data);
    }
  }, [codigo]);

  useEffect(() => {
    carregarRota();
  }, [codigo]);

  return (
    <div>
      <Row className="justify-content-md-center"><h3>Rota para entrega do pedido {codigo}</h3></Row>
      <MapContainer directions={directions} />
    </div>
    );
}

export default RotaEntrega;