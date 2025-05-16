import React from "react";

const ImageCardGrid = ({ title, cards }) => {
  return (
    <section className="px-4 md:px-16 py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>

      {/* Carousel for mobile */}
      <div className="block sm:hidden overflow-x-auto">
        <div className="flex gap-4 w-max px-1">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative min-w-[180px] h-[180px] flex-shrink-0 cursor-pointer rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-2">
                <p className="text-sm font-semibold">{card.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid for tablets and larger */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-[180px] h-[180px] cursor-pointer rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-2">
              <p className="text-sm font-semibold">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageCardGrid;
