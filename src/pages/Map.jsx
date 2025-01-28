import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { getIcon } from "../utils/constants";
import { clearRoute, open } from "../redux/slices/detailSlice";
import { useEffect } from "react";
import { getFlights } from "../redux/actions";

const Map = () => {
  const dispatch = useDispatch();
  const { flights } = useSelector((store) => store.flight);
  const { route } = useSelector((store) => store.detail);

  useEffect(() => {
    const id = setInterval(() => dispatch(getFlights()), 100000);

    return () => clearInterval(id);
  }, []);

  return (
    <MapContainer center={[46.6034, 3.1234]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((flight) => {
        return (
          <Marker
            position={[flight.lat, flight.lng]}
            icon={getIcon(flight.deg)}
          >
            <Popup>
              <div className="popup">
                <span>Kod: {flight.code}</span>
                <button onClick={() => dispatch(open(flight.id))}>
                  Detail
                </button>
                {route.length > 0 && (
                  <button onClick={() => dispatch(clearRoute())}>
                    Clear Route
                  </button>
                )}
              </div>
            </Popup>
          </Marker>
        );
      })}

      {route && <Polyline positions={route} />}
    </MapContainer>
  );
};

export default Map;
