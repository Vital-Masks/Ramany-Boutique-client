import '@instak/react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from '@instak/react-responsive-carousel';

const ImageCarousel = ({ images }) => {
  return (
    <Carousel>
      {images?.map((image, index) => (
        <div key={index} className="h-[500px] w-auto object-contain">
          <img
            src={image.base64URL}
            alt="Carousel"
            className="object-contain w-auto h-full"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
