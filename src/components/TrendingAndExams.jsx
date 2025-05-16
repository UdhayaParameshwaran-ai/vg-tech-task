import React from "react";
import ImageCardGrid from "./ImageCardGrid";

const ExamsSection = () => {
  const testYourAbility = [
    {
      title: "Game Development",
      img: "#",
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
  return (
    <section className="py-16 px-4 md:px-16 space-y-16 bg-white">
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        {/* Image - Stays Right in Large Screens */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/online-exam.png"
            alt="online-exam"
            className="rounded-lg shadow-md w-[70%] md:w-[80%] object-cover"
          />
        </div>

        {/* Left Text - h1 & h2 Stay Left on Large Screens, Move Above Image in Mobile */}
        <div className="md:w-1/2 flex flex-col space-y-4">
          <div className="order-1 md:order-none">
            <h1 className="text-2xl font-bold text-green-700">
              Online Courses
            </h1>
            <h2 className="text-xl text-gray-700 font-semibold">
              Our Courses are the best among others
            </h2>
          </div>

          {/* Paragraph & Button - Stays Below Image in Mobile */}
          <div className="order-3 md:order-none">
            <p className="text-gray-600">
              Lorem ipsum dolor sit at, consectetur adipielit. Facilisi
              fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at,
              consectetur adipielit. Facilisi fermentum, dignissim pharetra.
              Aliquam
            </p>
            <button className="border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-gray-100 mt-6">
              Explore exams
            </button>
          </div>
        </div>
      </div>

      <ImageCardGrid title="Test Your ability" cards={testYourAbility} />
    </section>
  );
};

export default ExamsSection;
