import React from "react";

const EnrollmentSection = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Enrol for a course now
      </h2>

      <div className="flex flex-col md:flex-row gap-12 justify-between items-start">
        {/* Left Text */}
        <div className="hidden md:block md:w-1/2">
          <h3 className="text-3xl font-bold mb-4">
            Take your career to <br /> the next level.
          </h3>
          <p className="text-gray-600 mb-4">With indispensable courses</p>
          <p className="text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit at, consectetur adipielit. <br />
            Facilisi fermentum, dignissim pharetra. Aliquam <br />
            Lorem ipsum dolor sit at, consectetur adipielit. <br />
            Facilisi fermentum, dignissim pharetra. Aliquam <br />
            Lorem ipsum dolor sit at, consectetur adipielit. <br />
            Facilisi fermentum, dignissim pharetra. Aliquam
          </p>
        </div>

        {/* Right Form */}
        <div className="md:w-1/2 bg-white rounded-lg shadow-md p-8 w-full">
          <h4 className="text-lg font-semibold mb-6">
            Registration for enrolment
          </h4>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="relative">
              <select className="w-full border border-gray-300 px-4 py-2 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">List of courses goes here</option>
                <option value="frontend">Frontend Development</option>
                <option value="backend">Backend Development</option>
                <option value="data">Data Science</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;
