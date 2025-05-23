import { Link } from "react-router-dom";
import "../css/component/Drop.scss";

export default function Nav({ vert }) {
  return (
    <div className={`drop-content-${vert ? "visible" : "hidden"}`}>
      <div className="page">
        <Link to="/bathrooms">bathrooms</Link>
      </div>
      <div className="page">
        <Link to="/builds">builds</Link>
      </div>
    </div>
  );
}
