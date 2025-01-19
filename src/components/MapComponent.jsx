import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const MapComponent = ({ center }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAst_J31Q3TeQCV_Z5mqGR1hwUnMm9q9cc"
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap
      center={center}
      zoom={15}
      mapContainerStyle={{ width: "100%", height: "400px" }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MapComponent;
