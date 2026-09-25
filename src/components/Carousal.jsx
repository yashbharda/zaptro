import React, { useEffect } from "react";
import { getData } from "../context/DataContext";

import * as ReactSlick from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "./Category";

const Carousal = () => {
  const { data, fetchAllProducts } = getData();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  // Custom Previous and Next arrows for Slick Carousel
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ ...style, zIndex: 3 }}
      >
        <AiOutlineArrowLeft
          className="arrows"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            left: "50px",
          }}
        />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ ...style, zIndex: 3 }}
      >
        <AiOutlineArrowRight
          className="arrows"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            right: "50px",
          }}
        />
      </div>
    );
  };

  const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "smartphones",
    "mens-shoes",
    "womens-dresses",
  ];

  const categoryProducts = categories
    .map((category) => data?.find((product) => product.category === category))
    .filter(Boolean);

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const Slider = ReactSlick.default.default;

  return (
    <div>
      <Slider {...settings}>
        {categoryProducts.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10"
            >
              <div className="flex flex-col md:flex-row gap-10 justify-center h-150 my-20 md:my-0 items-center px-4">
                <div className="space-y-3 md:space-y-6">
                  <h3 className="text-red-500 font-semibold font-sans text-xl uppercase">
                    {item.category}
                  </h3>

                  <h1 className="text-xl md:text-4xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-125 text-white">
                    {item.title}
                  </h1>

                  <p className="md:w-125 line-clamp-2 md:line-clamp-3 text-gray-400 pr-7">
                    {item.description}
                  </p>

                  <button className="bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2">
                    Shop Now
                  </button>
                </div>

                <div>
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="rounded-full w-125 hover:scale-105 transition-all shadow-2xl shadow-red-400"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <Category />
    </div>
  );
};

export default Carousal;
