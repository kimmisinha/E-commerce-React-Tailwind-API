import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-3xl text-white font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300">
              <FaFacebook size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300">
              <FaTwitter size={28} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300">
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
        <p className="text-white text-lg mb-6">
          Subscribe to our newsletter for the latest updates.
        </p>
        <form className="flex justify-center mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-l-full focus:outline-none text-gray-700"
          />
          <button className="bg-secondary text-white px-6 py-3 rounded-r-full hover:bg-secondary-dark transition duration-300">
            Subscribe
          </button>
        </form>
        <p className="text-white text-sm">
          &copy; 2024 Kimmi Kumari Sinha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
