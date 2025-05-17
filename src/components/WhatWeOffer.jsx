import React from "react";
import ImageCardGrid from "./ImageCardGrid";

const courses = [
  {
    title: "Game Development",
    img: "/images/game-dev.png",
  },
  {
    title: "Marketing Strategy",
    img: "#",
  },
  {
    title: "Data Analysis With Python",
    img: "#",
  },
  {
    title: "Advanced UX Designs",
    img: "#",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="py-16 px-4 md:px-16 space-y-16 bg-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What we offer
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/what-we-off.png"
            alt="Online Course"
            className="rounded-lg shadow-md w-[70%] md:w-[80%] object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 flex flex-col space-y-4">
          <div className="order-1 md:order-none">
            <h1 className="text-2xl font-bold text-green-700">
              Online Courses
            </h1>
            <h2 className="text-xl text-gray-700 font-semibold">
              Our Courses are the best among others
            </h2>
          </div>

          {/* Paragraph & Button */}
          <div className="order-3 md:order-none">
            <p className="text-gray-600">
              Lorem ipsum dolor sit at, consectetur adipielit. Facilisi
              fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at,
              consectetur adipielit. Facilisi fermentum, dignissim pharetra.
              Aliquam
            </p>
            <button className="border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-gray-100 mt-6">
              Explore our courses
            </button>
          </div>
        </div>
      </div>

      <ImageCardGrid title="Trending Courses" cards={courses} />
    </section>
  );
};

export default WhatWeOffer;
