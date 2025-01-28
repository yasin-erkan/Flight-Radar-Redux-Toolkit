import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import "bootstrap/dist/css/bootstrap.min.css";
import { open } from "../redux/slices/detailSlice";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import nullCheck from "./../utils/nullCheck";

const List = () => {
  const dispatch = useDispatch();

  const { isLoading, error, flights } = useSelector((store) => store.flight);

  //the page shown at the bottom
  const [start, setStart] = useState(1);

  //the elements shown in per page
  const perPage = 11;

  //splice the page numbers from start to finish
  const end = start + perPage;
  const currFlights = flights.slice(start, end);

  //find total page number
  const total = Math.ceil(flights.length / perPage);

  //when you click ont the new page
  const handlePage = (event) => {
    setStart(event.selected * 10);
  };

  if (isLoading)
    return (
      <div className="list-wrapper">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className="list-wrapper">
        <Error message={error} />
      </div>
    );

  return (
    <div className="list-container">
      <table className="table table-hover table-responsive">
        <thead>
          <tr>
            <th>id</th>
            <th>Code</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Degree</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {currFlights.map((flight) => (
            <tr key={flight.id}>
              <td>{nullCheck(flight.id)}</td>
              <td>{nullCheck(flight.code)}</td>
              <td>{nullCheck(flight.lat)}</td>
              <td>{nullCheck(flight.lng)}</td>
              <td>{nullCheck(flight.deg)}</td>
              <td>
                <button onClick={() => dispatch(open(flight.id))}>
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-wrapper">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          previousLabel="previous"
          className="pagination"
          pageCount={total}
          pageRangeDisplayed={1}
          onPageChange={handlePage}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default List;
