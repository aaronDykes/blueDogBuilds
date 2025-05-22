import { Link } from "react-router-dom";
import { IoReturnDownForward } from "react-icons/io5";
import "../css/component/Nav.scss";

import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
import Drop from "./Drop";
import Contact from "./Contact";

export default function Nav({ clicked, setClicked }) {
  const [vert, setVertical] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <div className={`nav ${clicked ? "hidden" : "visible"}`}>
      <div id="menu" onClick={() => setClicked(!clicked)}>
        <IoReturnDownForward />
      </div>
      <div className="n-item">
        <Link to="/">home</Link>
      </div>
      <br />

      <div className="n-item gallery">
        <Link to="/about">about</Link>
      </div>



      <Drop vert={vert} />

      <div className="n-item gallery">
        <Link onClick={() => setContact(!contact)}>contact</Link>
        <RiArrowDownSLine
          onClick={() => setContact(!contact)}
          className={`drop-btn ${!contact ? "vertical" : ""}`}
        />
      </div>

      <Contact contact={contact} />

      <div className="n-item gallery">
        <Link to="/privacy">privacy</Link>
      </div>
    </div>
  );
}
