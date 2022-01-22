import "./Carousel.css";
import { images } from "../Helpers/CarouselData";
import { useState, useEffect } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowFowardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Carousel = () => {
  const [indice, setIndice] = useState(0);
  const [count, setCount] = useState(0);

  const clickLeft = (e) => {
    if (indice !== 0) {
      setIndice(indice - 1);
    } else {
      setIndice(2);
    }
  };
  const clickRight = (e) => {
    if (indice <= 1) {
      setIndice(indice + 1);
    } else {
      setIndice(0);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count % 5 === 0) {
        clickRight();
      }
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [clickRight]);

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[indice].img})` }}
      >
        <div className="left" onClick={clickLeft}>
          <ArrowBackIosIcon />
        </div>
        <div className="center">
          <h1>{images[indice].title}</h1>
          <p>{images[indice].subtitle}</p>
        </div>
        <div className="right" onClick={clickRight}>
          <ArrowFowardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
