import React from "react";
import student1 from "../../images/student1.jpg";
import student2 from "../../images/student2.jpg";
import student3 from "../../images/student3.jpg";
import student4 from "../../images/student4.jpg";

const Testimonial = () => {
  return (
    <section className="bg-emerald-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-32 font-semibold text-4xl text-gray-600">
          <span className="text-emerald-700 text-bold">Hear</span> from our{" "}
          <span className="text-emerald-700 text-bold">students</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="relative bg-white shadow-lg pt-16">
            <div className="w-32 h-132 rounded-full absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2">
              <img
                src={student1}
                className="w-full h-full rounded-full"
                alt="Student 1"
              />
            </div>
            <div className="p-8 text-center">
              <p className="text-gray-600 font-medium mb-6">
                "I am free to learn at my own pace, follow my own schedule and
                choose the subject I like. Great study portal for people like
                me"
              </p>
              <h6 className="text-emerald-700 font-semibold ">Hasin</h6>
            </div>
          </div>

          {/* number 2 */}
          <div className="relative bg-white shadow-lg pt-16 mt-16 lg:mt-0">
            <div className="w-32 h-132 rounded-full absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2">
              <img
                src={student2}
                className="w-full h-full rounded-full"
                alt="Student 1"
              />
            </div>
            <div className="p-8 text-center">
              <p className="text-gray-600 font-medium mb-6">
                "I am happy with their arrangement of lessons and subjects. They
                reflect a scientific investigation. "
              </p>
              <h6 className="text-emerald-700 font-semibold ">Hasan</h6>
            </div>
          </div>

          {/* number 3 */}
          <div className="relative bg-white shadow-lg pt-16 mt-16 xl:mt-0">
            <div className="w-32 h-132 rounded-full absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2">
              <img
                src={student3}
                className="w-full h-full rounded-full"
                alt="Student 1"
              />
            </div>
            <div className="p-8 text-center">
              <p className="text-gray-600 font-medium mb-6">
                "I'm a very strict person so I require everything to be
                organized and neat."
              </p>
              <h6 className="text-emerald-700 font-semibold ">Helen</h6>
            </div>
          </div>

          {/* number 4 */}
          <div className="relative bg-white shadow-lg pt-16 mt-16 xl:mt-0">
            <div className="w-32 h-132 rounded-full absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2">
              <img
                src={student4}
                className="w-full h-full rounded-full"
                alt="Student 1"
              />
            </div>
            <div className="p-8 text-center">
              <p className="text-gray-600 font-medium mb-6">
                "HHH is my best choice. Their tutors are smart and professional
                when dealing with students"
              </p>
              <h6 className="text-emerald-700 font-semibold ">Helal</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
