import React from "react";
import banner from "../assets/banner1.png";
import { Link } from "react-router-dom";

const MidBanner = () => {
  return (
    <section className="bg-gray-100 px-4 py-8 sm:px-6 md:py-16 lg:px-8">
      <div
        className="relative mx-auto flex min-h-105 w-full max-w-7xl items-center justify-center overflow-hidden rounded-xl bg-cover bg-center sm:min-h-120 md:min-h-140 md:rounded-2xl"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 rounded-xl bg-black/55 md:rounded-2xl"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white sm:px-6">
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Discover Everything You Love, All in One Place
          </h1>

          <p className="mb-6 text-base leading-relaxed sm:text-lg md:text-xl">
            Shop the latest products across fashion, beauty, electronics,
            home essentials and more.
          </p>

          <Link to="/products">
            <button className="rounded-lg bg-red-500 px-5 py-2.5 font-semibold text-white transition duration-300 hover:bg-red-600 sm:px-6 sm:py-3">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MidBanner;