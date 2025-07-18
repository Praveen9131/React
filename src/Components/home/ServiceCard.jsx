import React from "react";

const ServiceCard = ({ title, description, image, isFree }) => {
  return (
    <div className="bg-[#0b1120] rounded-2xl shadow-lg overflow-hidden w-full max-w-sm text-white">
      <div className="relative h-56 overflow-hidden">
        <img src={image} alt={title} className="object-top w-full h-full" />
        {isFree && <div className=""></div>}
      </div>

      <div className="px-5 py-4 space-y-3">
        <h3 className="text-lg sm:text-xl font-semibold leading-tight">
          {title}
        </h3>

        <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
          {description}
        </p>

        <button className="w-full mt-2 bg-white text-black hover:bg-gray-100 font-semibold py-2 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all duration-200">
          Explore Services
          <span className="text-lg">&#8594;</span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
