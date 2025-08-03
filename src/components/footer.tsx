
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#ccc] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* About the Church */}
          <div>
            <img src={logo} width="200" className="m-auto" alt="Church Logo" />
            <p className="text-black mt-3 text-sm">
             ST. STEPHEN MISSION INT'L </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-800">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-black">
              <li><a href="#" className="hover:text-blue-800 transition">Home</a></li>
              <li><Link to={'/oluwaseun'}>Oluwaseun Parish</Link></li>
              <li><Link to={'/true-vine'}>True Vine Parish</Link></li>
              
            </ul>
          </div>

          {/* Contact Info */}
          {/* <div>
            <h3 className="text-lg font-semibold text-blue-800">Visit Us</h3>
            <p className="text-black mt-3 text-sm">
              Lagelu Area Headquarters, Akobo, Ibadan<br />
              Oyo State, Nigeria
            </p>
          </div> */}
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-center">
          
          {/* Social Media Icons */}
          {/* <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition">
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-pink-600 transition">
              <FaInstagram className="text-white text-lg" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-black transition">
              <FaTiktok className="text-white text-lg" />
            </a>
          </div> */}

          {/* Newsletter */}
          {/* <div className="mt-4 md:mt-0">
            <h3 className="text-lg font-semibold text-blue-800">Subscribe to Our Newsletter</h3>
            <div className="flex mt-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
              />
              <button className="bg-black px-4 py-2 rounded-r-md hover:bg-blue-800 transition">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>

        {/* Copyright */}
        <p className="text-gray-800 text-center text-sm mt-6">
          &copy; {new Date().getFullYear()} ST. STEPHEN MISSION INT'L. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
