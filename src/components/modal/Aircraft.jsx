import { IoAirplaneOutline } from "react-icons/io5";
import nullCheck from "./../../utils/nullCheck";

const Aircraft = ({ data }) => {
  return (
    <div className="aircraft">
      <div className="icon">
        <IoAirplaneOutline />
      </div>

      <div>
        <p>
          <span className="title">Aircraft Model</span>
          <span>{nullCheck(data?.model?.text)}</span>
        </p>

        <div>
          <p>
            <span className="title">Registration Code</span>
            <span>{nullCheck(data?.registration)}</span>
          </p>
          <p>
            <span className="title">Country ID</span>
            <span>{nullCheck(data?.countryId)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aircraft;
