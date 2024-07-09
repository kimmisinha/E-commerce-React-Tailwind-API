import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-2xl text-white font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <p className="text-white text-center mb-4">
          Subscribe to our newsletter for the latest updates.
        </p>
        <form className="flex justify-center mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-full focus:outline-none"
          />
          <button className="bg-secondary text-white px-4 py-2 rounded-r-full hover:bg-secondary-dark">
            Subscribe
          </button>
        </form>
        <p className="text-white text-center">
          Copyright &copy; kimmi kumari sinha 🤍 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
