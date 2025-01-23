import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-rotatedmarker";
import { useDispatch, useSelector } from "react-redux";
import { planeIcon } from "./../utils/constants";
import { open } from "../redux/slices/detailSlice";

const Map = () => {
  const dispatch = useDispatch();
  const { isLoading, error, flights } = useSelector((store) => store.flight);

  return (
    <MapContainer
      center={[52.361481, -1.068845]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((flight) => (
        <Marker
          key={flight.id}
          position={[flight.lat, flight.lng]}
          icon={planeIcon}
          rotationAngle={flight.deg - 47}
        >
          <Popup>
            <div className="popup">
              <span>F-Code: {flight.code}</span>
              <button onClick={() => dispatch(open(flight.id))}>Detail</button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
