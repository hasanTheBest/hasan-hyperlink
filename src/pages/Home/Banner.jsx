import React from "react";
import bannerImg from "../../../src/images/Programming-amico blue.svg";

const Banner = () => {
  return (
    <section className="bg-emerald-50 px-4 py-12">
      <div className="flex items-center justify-center max-w-6xl mx-auto">
        <div>
          <h1 className="text-6xl mb-12 font-bold text-emerald-700">
            Hasan House of Hyperlink
          </h1>
          <h3 className="text-2xl text-gray-600 mb-3 font-semibold">
            Learn Coding at your comfort
          </h3>
          <p className="text-gray-600 font-medium text-lg">
            The journey to learn coding is never easy before as we construct the
            whole course in such a way that is funny, and interactive you can
            learn in your own space.
          </p>
        </div>
        <img
          src={bannerImg}
          className="w-7/12   h-auto"
          alt="Programming Illustration"
        />
      </div>
    </section>
  );
};

export default Banner;
