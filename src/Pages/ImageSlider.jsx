import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../ImageSlider.css";
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipe: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/public/First.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="/public/Second.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="/public/Third.jpg" alt="Slide 3" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
