import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/Loading4.webm";
import Breadcrums from "../components/Breadcrums";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState();
  const { addToCart } = useCart();

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${params.id}`,
      );

      setSingleProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [params.id]);

  return (
    <>
      {singleProduct ? (
        <div className="px-4 pb-4 md:px-0">
          <Breadcrums title={singleProduct.title} />

          <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
            {/* Product Image */}
            <div className="w-full">
              <img
                src={singleProduct.images[0]}
                alt={singleProduct.title}
                className="rounded-2xl md:w-full w-60 object-cover md:-mt-15 md:-ml-10 ml-20"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-6">
              <h1 className="md:text-3xl text-xl font-bold text-gray-800">
                {singleProduct.title}
              </h1>

              <div className="text-gray-700">
                {singleProduct.category?.toUpperCase()} /{" "}
                {singleProduct.brand?.toUpperCase()}
              </div>

              {/* Price */}
              <p className="text-xl text-red-500 font-bold flex items-center gap-3 flex-wrap">
                <span>${singleProduct.price}</span>

                <span className="line-through text-gray-700">
                  $
                  {Math.round(
                    singleProduct.price +
                      (singleProduct.price * singleProduct.discountPercentage) /
                        100,
                  )}
                </span>

                <span className="text-white bg-red-500 px-4 py-2 rounded-md text-[16px]">
                  {singleProduct.discountPercentage}% discount
                </span>
              </p>
              <p className="text-gray-600 text-justify">
                {singleProduct.description}
              </p>

              {/* quantity selector  */}
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-gray-700">
                  Quantity:{" "}
                </label>
                <input
                  type="number"
                  min={1}
                  value={1}
                  className="w-20 border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => addToCart(singleProduct)}
                  className="px-6 flex gap-2 py-2 text-lg bg-red-500 text-white rounded-md"
                >
                  <IoCartOutline className="w-6 h-6" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
