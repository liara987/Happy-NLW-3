import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const SimpleMap = () => {
    const [center, setCenter] = useState({lat: -23.7192897, lng: -46.7714094 });
    const [zoom, setZoom] = useState(11);

    return (
        <div style={{ height: '100vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_TOKEN}` }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {/* <Marker
            lat={-23.7192897}
            lng={-46.7714094}
            text="My Marker"            
          /> */}
        </GoogleMapReact>
      </div>
    );
}

export default SimpleMap;