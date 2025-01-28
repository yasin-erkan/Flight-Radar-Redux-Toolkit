import nullCheck from "./../../utils/nullCheck";
import formatDate from "./../../utils/formatDate";

const Time = ({ data }) => {
  return (
    <div className="time">
      <div>
        <span>Scheduled Departure</span>
        <span>{formatDate(data.scheduled.departure)}</span>
      </div>
      <div>
        <span>Scheduled Arrival</span>
        <span>{nullCheck(formatDate(data.scheduled.arrival))}</span>
      </div>
      <div>
        <span>Real-time Departure</span>
        <span>{nullCheck(formatDate(data.scheduled.departure))}</span>
      </div>
      <div>
        <span>Estimated Arrival</span>
        <span>{nullCheck(formatDate(data.estimated.arrival))}</span>
      </div>
    </div>
  );
};

export default Time;
