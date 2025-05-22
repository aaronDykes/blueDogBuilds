import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
import "../css/component/Drop.scss";

export default function Nav({ contact }) {
  return (
    <div className={`drop-content-${contact ? "visible" : "hidden"}`}>
      <div className="page">
        <Link to="/inquire">
          inquire
        </Link>
      </div>
      <div className="page">
        <a href="mailto:joel@bluedogbuilds.ca">email</a>
      </div>

      <div className="page">
        <h2>613-858-3021</h2>
      </div>
      <div className="page" id="icon">
        <Link to="https://www.instagram.com/bluedogbuilds/">
          <IoLogoInstagram />
        </Link>
      </div>
    </div >
  );
}
