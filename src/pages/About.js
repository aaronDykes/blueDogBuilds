import "../css/page/Gallery.scss";
import { Link } from "react-router-dom";
import { BiAlignLeft } from "react-icons/bi";
import { useState } from "react";

import Nav from "../components/Nav";
import Gal2 from "../assets/util/AboutGal";

export default function Page2() {
  const [clicked, setClicked] = useState(false);

  return (
    <div id="gallery">
      <div className={`g-nav-${clicked ? "visible" : "hidden"}`}>
        <Nav clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={`g-content-${!clicked ? "visible" : "hidden"}`}>
        <div className="g-icon" onClick={() => setClicked(!clicked)}>
          <BiAlignLeft />
        </div>

        <div className="about">

          <h1 id="about-about">
            Home renovation experts<br />
            Located in Ottawa Ontario<br />
            Specializing in quality workmanship<br />
          </h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* <Link id="about-link" to="/">Book a free consultation today</Link> */}
          <div className="page">
            <Link to="/inquire">Book a free consultation today</Link>
          </div>
        </div>
        <div className="photos">
          <Gal2 />
        </div>
      </div>
    </div>
  );
}
