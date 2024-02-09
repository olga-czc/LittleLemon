import FoodImage from "../../assets/food4.webp";
import { Link } from "react-router-dom";

export default function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={FoodImage}
        alt="Little Lemon Ingredients"
      ></img>
      <Link to="/reservations">
      <div className="reserve-header-text">
        <h1> Book Table</h1>
      </div>
      </Link>
    </header>
  );
}