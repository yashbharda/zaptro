import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden bg-gray-900 py-10 text-gray-200">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-5 sm:grid-cols-2 md:grid-cols-4 md:gap-10 md:px-6">
        
        {/* Info */}
        <div className="min-w-0">
          <Link to="/">
            <h1 className="text-2xl font-bold text-red-500">Zaptro</h1>
          </Link>

          <p className="mt-2 text-sm leading-6">
            Your one-stop destination for everything you love.
          </p>

          <p className="mt-2 break-words text-sm leading-6">
            123 Shopping Street, Gujarat, India
          </p>

          <p className="break-words text-sm leading-6">
            Email: support@Zaptro.com
          </p>

          <p className="text-sm leading-6">
            Phone: +91 98765 43210
          </p>
        </div>

        {/* Customer Service */}
        <div className="min-w-0">
          <h3 className="text-xl font-semibold">Customer Service</h3>

          <ul className="mt-3 space-y-3 text-sm">
            <li className="cursor-pointer hover:text-red-400">
              Contact Us
            </li>

            <li className="cursor-pointer hover:text-red-400">
              Shipping & Returns
            </li>

            <li className="cursor-pointer hover:text-red-400">
              FAQs
            </li>

            <li className="cursor-pointer hover:text-red-400">
              Order Tracking
            </li>

            <li className="cursor-pointer hover:text-red-400">
              Size Guide
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="min-w-0">
          <h3 className="text-xl font-semibold">Follow Us</h3>

          <div className="mt-4 flex gap-5 text-xl">
            <FaFacebook className="cursor-pointer hover:text-red-400" />
            <FaInstagram className="cursor-pointer hover:text-red-400" />
            <FaTwitterSquare className="cursor-pointer hover:text-red-400" />
            <FaPinterest className="cursor-pointer hover:text-red-400" />
          </div>
        </div>

        {/* Newsletter */}
        <div className="min-w-0">
          <h3 className="text-xl font-semibold">Stay in the Loop</h3>

          <p className="mt-2 text-sm leading-6">
            Subscribe to get the latest products, offers, and exclusive deals.
          </p>

          <form className="mt-4 flex w-full max-w-full">
            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 rounded-l-md bg-white p-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-500"
            />

            <button
              type="submit"
              className="shrink-0 rounded-r-md bg-red-600 px-3 text-sm text-white hover:bg-red-700 sm:px-4"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mx-auto mt-8 w-full max-w-7xl border-t border-gray-700 px-5 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-red-500">Zaptro</span>. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;