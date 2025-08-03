import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import heroBg from "../assets/hero.jpg"; // Hero section background

// Gallery images
import one from "../assets/1.jpg";
import three from "../assets/3.jpg";
import four from "../assets/7.jpg";
import img from '../assets/056c54fe2dc77b78bd278120a690085e.jpg';
import img2 from '../assets/159482c99b0367004f8a7e7313a4eed6.jpg';
import two2 from '../assets/b64eba0b6e4f3192469d706725075fd9.jpg';
import two3 from '../assets/1.jpg';
// import two4 from '../assets/2.webp';
import two5 from '../assets/3.jpg';
import two7 from '../assets/7.jpg';

const GallerySection = () => {
  const images = [one, three, four, img, img2, two2, two3, two5, two7];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-12 bg-gray-200">
      <motion.h2
        className="text-2xl md:text-4xl text-black font-semibold text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Moments from Our Services
      </motion.h2>
      <motion.p
        className="text-gray-800 px-8 text-sm text-center max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A glimpse into worship, community, and service at St Steven International.
      </motion.p>
      <Slider {...settings} className="w-11/12 mx-auto max-w-7xl">
        {images.map((img, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-2">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-72 md:h-96 object-contain bg-white rounded-lg shadow-lg"
            />
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="absolute bottom-10 left-6 md:left-12 text-white max-w-xl">
        <motion.h1
          className="text-3xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ST. STEPHEN MISSION INT'L
        </motion.h1>
        <motion.p
          className="mt-2 text-sm md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A place to worship, grow, and experience God's love together.
        </motion.p>
        <motion.button
          className="mt-4 px-6 py-3 bg-white text-black font-semibold hover:bg-black hover:text-white transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Join Us This Sunday
        </motion.button>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <GallerySection />
    </div>
  );
};

export default HomePage;
