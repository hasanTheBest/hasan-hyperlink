import React from "react";
import image from "../../images/mahmud.jpg";

const About = () => {
  return (
    <section className="py-8 px-4 bg-emerald-50 min-h-[calc(100vh-96px)]">
      <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-8">
        <img
          className="w-5/12 h-auto rounded-full"
          src={image}
          alt="Mahmudul Hasan"
        />
        <div className="p-6">
          <h2 className="text-5xl font-semibold text-emerald-700 mb-8">
            Mahmudul Hasan
          </h2>
          <h3 className="text-2xl text-gray-600 font-medium mb-4">
            React.js Developer
          </h3>
          <p className="text-gray-600 mb-4">
            I am a passionate JavaScript developer offering excellent
            proficiency in JS Object Model, DOM manipulation, asynchronous JS,
            ES6. I prefer React.js for building UI ensuring its core concepts
            and principles. You can visit my{" "}
            <a
              href="https://github.com/hasanTheBest"
              className="text-emerald-700 font-medium"
            >
              github profile
            </a>{" "}
            and look my latest projects accomplished with React and Javascript.
          </p>
          <p className="text-gray-600">
            My mission to be a MERN stack developer. So I am currently learning
            and practicing Node.js and MongoDB.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
