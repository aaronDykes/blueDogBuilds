import "../css/page/Home.scss";
import "../css/page/Gallery.scss";
import Nav from "../components/Nav";
import { BiAlignLeft } from "react-icons/bi";
import { useState } from "react";
import BlueDogBuilds from "../assets/util/Gal3";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <div id="home">
      <div className={`h-nav-${clicked ? "visible" : "hidden"}`}>
        <Nav clicked={clicked} setClicked={setClicked} />
      </div>

      <div className={`h-content-${!clicked ? "visible" : "hidden"}`}>
        <div className="h-icon" onClick={() => setClicked(!clicked)}>
          <BiAlignLeft />
        </div>

        <div className="photos">
          <BlueDogBuilds />
        </div>

      </div>
    </div>
  );
}
