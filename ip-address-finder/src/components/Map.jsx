import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ lat, lon }) => {
  return (
    <div className="w-137 h-87 border-4 border-blue-700 ">
      <MapContainer center={[lat, lon]} zoom={14} style={{ height: "100%", width: "100%" }}>
        {/* OpenStreetMap tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Marker for user location */}
        <Marker position={[lat, lon]}>
          <Popup>Your location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
