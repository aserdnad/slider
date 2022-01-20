import "./Carousel.css";
import { images } from "../Helpers/CarouselData";
import { useState } from "react";

const Carousel = () => {
  const [indice, setIndice] = useState(0);

  const manejarClick = (e) => {
    if (indice <= 1) {
      setIndice(indice + 1);
    } else {
      setIndice(0);
    }
  };
  return (
    <div className="carousel">
      <div
        className="carouselInner"
        onClick={manejarClick}
        style={{ backgroundImage: `url(${images[indice].img})` }}
      >
        {/* <img src={images[indice].img} /> */}
      </div>
    </div>
  );
};

export default Carousel;
