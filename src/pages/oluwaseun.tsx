import { FaFacebookF, FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import heroImage from "../assets/hero2.jpg"; // Replace with your actual hero image

const OluwaseunParish = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <motion.h1
            className="text-white text-3xl md:text-5xl p-9 font-bold text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
             CCC Oluwaseun Parish Citadel of Grace
          </motion.h1>
        </div>
      </div>

      {/* Contact & Social Media */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Contact Information</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-800" />
              Ccc Oluwaseun Parish Akobo Ibadan Nigeria Opp Weeldrop filling station 

            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-blue-800" />
              +2348033956272
            </p>
            {/* <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-800" />
              email@oluwaseun
            </p> */}
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/share/1Ef16zCvSJ/?mibextid=wwXIfr" className="p-3 bg-blue-800 text-white rounded-full hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/oluwaseun_parish?igsh=c200aTN5bmV2amFj" className="p-3 bg-pink-700 text-white rounded-full hover:bg-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@c.c.coluwaseunparishcita?_t=ZS-8zAzWMRAgDP&_r=1" className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              <FaTiktok />
            </a>
          </div>
        </div>
      </section>

      
     
    </div>
  );
};

export default OluwaseunParish;
