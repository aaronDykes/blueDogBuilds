import "../../css/page/Gallery.scss";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

function BlueDogBuilds() {
  const imgs = require.context("../images/Home", false, /\.(png)$/);
  const Images = imgs.keys().map((image) => imgs(image));

  return Images.map((img, index) => {
    return (
      <div className="image" key={index}>
        <LazyLoadImage src={img} threshold={100} effect="blur" />
      </div>
    );
  });
}

export default BlueDogBuilds;