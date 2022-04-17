import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <section className="px-4 bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-16 font-semibold text-gray-500">
          <span className="text-emerald-700 text-5xl font-bold">Courses</span>{" "}
          we offer
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {courses.map((course) => (
            <Service key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
