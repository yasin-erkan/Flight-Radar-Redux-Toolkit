import { useDispatch } from "react-redux";
import { close } from "../../redux/slices/detailSlice";
import nullCheck from "./../../utils/nullCheck";

const Head = ({ info }) => {
  const dispatch = useDispatch();

  return (
    <div className="head">
      <div>
        <h3 title="callsign">
          {nullCheck(info?.identification?.callsign, "white")}
        </h3>
        <span title="Flight Number">
          {nullCheck(info?.identification?.number?.default, "white")}
        </span>
        <span title="Aircraft IATA/ICAO type code">
          {nullCheck(info?.aircraft?.model?.code, "white")}
        </span>
      </div>
      <button onClick={() => dispatch(close())}>X</button>
    </div>
  );
};

export default Head;
