import "./Carousel.css";
import { images } from "../Helpers/CarouselData";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carouselInner">
        <img src={images[0].img} />
      </div>
    </div>
  );
};

export default Carousel;
