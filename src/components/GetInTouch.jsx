import React from "react";
import { Facebook, Instagram, Mail, Search, Twitter } from "lucide-react";

const GetInTouch = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit at, consectetur adipis elit. Facilisis
          fermentum, dignissim pharetra. Aliquam Lorem ipsum dolor sit at,
          consectetur adipis elit. Facilisis fermentum, dignissim pharetra.
          Aliquam
        </p>
      </div>

      <div className="border-t border-gray-200 pt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/*Contact Info - LEFT side*/}
          <div className="lg:order-1 lg:w-1/2 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">info@column9.com</h2>
              <p className="text-gray-600">
                lorem ipsum lorem ispum lorem ispum lorem ispum
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">+234 80XXXXXXXX</h2>
              <p className="text-gray-600">
                lorem ipsum lorem ispum lorem ispum
              </p>
            </div>

            <div>
              <p className="text-gray-600 mb-2">
                lorem ipsum lorem ispum lorem ispum
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                Support center →
              </a>

              {/* Icons Row */}
              <div className="flex gap-4 mt-4">
                <div className="p-3 border border-gray-300 rounded-full">
                  <Facebook className="text-gray-600 text-xl" />
                </div>
                <div className="p-3 border border-gray-300 rounded-full">
                  <Instagram className="text-gray-600 text-xl" />
                </div>
                <div className="p-3 border border-gray-300 rounded-full">
                  <Mail className="text-gray-600 text-xl" />
                </div>
                <div className="p-3 border border-gray-300 rounded-full">
                  <Twitter className="text-gray-600 text-xl" />
                </div>
              </div>
            </div>
          </div>

          {/*Contact Form - RIGHT side*/}
          <div className="lg:order-2 lg:w-1/2 space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Input Text
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-gray-400"
              ></textarea>
            </div>

            <button className="w-full lg:w-auto bg-black text-white font-medium py-3 px-6 rounded-none hover:bg-gray-800 transition duration-200">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
