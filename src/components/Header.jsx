import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);

  return (
    <header>
      <Link to="/" className="logo">
        <img src="./logo.webp" alt="logo" width={40} />
        <h2>Flight Radar</h2>
      </Link>
      <div className="buttons">
        <NavLink to="/">
          <button>Map</button>
        </NavLink>
        <NavLink to="/">
          <button>List</button>
        </NavLink>
        <h3>
          {isLoading
            ? "Flights are on progress!"
            : error
            ? error
            : `${flights.length} flights found`}
        </h3>
      </div>
    </header>
  );
};

export default Header;
