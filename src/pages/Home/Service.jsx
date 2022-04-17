import React from "react";

const Service = ({ price, title, image, description, id }) => {
  return (
    <div className="shadow-lg relative pb-12 bg-white border-emerald-900">
      <div className="w-full h-[220px] bg-sky-900 mb-8">
        <img src={image} alt={title} className="w-full h-full" />
      </div>
      <div className="px-4">
        <h4 className="text-2xl text-gray-500 font-semibold mb-4">{title}</h4>
        <h6 className="text-xl font-semibold mb-8 text-emerald-700">
          Price: ${price}
        </h6>
        <p className="mb-6 text-gray-500 font-medium"> {description}</p>
      </div>
      <button className="px-6 py-3 border-0 shadow absolute bottom-0 w-2/3 bg-emerald-800 hover:bg-emerald-700 transition-all text-emerald-100 left-1/2 -translate-x-1/2">
        Enroll
      </button>
    </div>
  );
};

export default Service;
