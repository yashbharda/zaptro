import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center">About Zaptro</h1>

        <p className="text-gray-700 text-lg">
          Welcome to <span className="font-semibold text-red-600">Zaptro</span>,
          your one-stop destination for everything you need in one place. From
          beauty and fragrances to furniture, groceries, home decoration,
          kitchen accessories, laptops, and the latest electronics, we bring
          together a wide range of quality products for your everyday needs.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Mission</h2>

          <p className="text-gray-700 text-base">
            At Zaptro, our mission is to make quality products accessible,
            affordable, and easy to shop for everyone. We are passionate about
            providing a diverse shopping experience where customers can find
            products for their lifestyle, home, personal care, technology, and
            everyday needs — all in one convenient place.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">
            Why Choose Zaptro?
          </h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Wide range of products across multiple categories</li>
            <li>Quality products from trusted brands</li>
            <li>Easy and convenient shopping experience</li>
            <li>Fast and secure delivery</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassle-free shopping</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Vision</h2>

          <p className="text-gray-700 text-base">
            We envision Zaptro as a trusted destination for everyday shopping,
            where customers can discover everything from personal care and
            beauty products to groceries, furniture, home essentials, kitchen
            accessories, laptops, electronics, and much more. Our goal is to
            make online shopping simple, reliable, and enjoyable for everyone.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-red-600 mb-2">
            Join the Zaptro Family
          </h3>

          <p className="text-gray-700 mb-4">
            Whether you are looking for something for yourself, your home, your
            kitchen, your daily needs, or the latest technology — Zaptro has
            something for everyone.
          </p>

          <Link to={"/products"}>
            <button className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition duration-300">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
