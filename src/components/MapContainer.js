import React, { Component, useCallback, useEffect, useRef, useState } from "react";
import { DirectionsRenderer, DirectionsService, GoogleMap, useLoadScript } from '@react-google-maps/api';

const objectsHeight = '450px';

const containerStyle = {
  //width: '450px',
  height: objectsHeight
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MapContainer({directions}) {
  console.log(process.env.REACT_APP_GOOGLE_API_KEY);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    // ...otherOptions
  });
  console.log({directions})

  const divRef = useRef(null);
  const [internalDirections, setInternalDirections] = useState();
  const [serviceCalled, setServiceCalled] = useState(false);
  const serviceCallback = useCallback((response) => {
    console.log({response})
    directions && setServiceCalled(true);
    response && setInternalDirections(response);
  }, [directions]);

  useEffect(() => {
    setServiceCalled(false);
  }, []);

  console.log({serviceCalled, isLoaded})

  const renderMap = useCallback(() => {
    console.log('renderMap');
    return (
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12" id="divMap">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {!serviceCalled && directions &&
                (<DirectionsService 
                  options={{destination: directions.destino, origin: directions.origem, travelMode: 'DRIVING'}}
                  callback={serviceCallback} 
                />)
            }
            {internalDirections && 
              (<DirectionsRenderer 
                  options={{directions: internalDirections}} 
                  panel={divRef.current}
                />)
            }
          </GoogleMap>
        </div>
        <div id="panel-div" className="col-lg-6 col-md-12 col-sm-12" ref={divRef} style={{maxHeight: objectsHeight, overflow: 'auto'}} />
      </div>
    )
  }, [isLoaded, internalDirections, directions]);

  return isLoaded ? renderMap() : <h1>not loaded</h1>;
}

export default MapContainer;
