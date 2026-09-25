import React from "react";
import { Truck, Lock, RotateCcw, Clock } from "lucide-react";

const features = [
  {
    icon: Truck,
    text: "Free Shipping",
    subtext: "On orders over $100",
  },
  {
    icon: Lock,
    text: "Secure Payment",
    subtext: "100% protected payments",
  },
  {
    icon: RotateCcw,
    text: "Easy Returns",
    subtext: "30-day return policy",
  },
  {
    icon: Clock,
    text: "24/7 Support",
    subtext: "Dedicated customer service",
  },
];

const Features = () => {
  return (
    <section className="w-full bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 bg-gray-100">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg p-5 sm:justify-start"
              >
                <Icon
                  className="h-9 w-9 shrink-0 text-gray-600 sm:h-10 sm:w-10"
                  aria-hidden="true"
                />

                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-900 sm:text-base">
                    {feature.text}
                  </p>

                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                    {feature.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;