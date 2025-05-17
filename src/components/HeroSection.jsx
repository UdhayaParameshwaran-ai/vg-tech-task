import React from "react";
import { CircleUserRound, Search, Menu } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-4 py-3 md:px-6">
        {/* Wrapper with 3 columns layout */}
        <div className="flex items-center justify-between md:grid md:grid-cols-3 md:items-center">
          {/* Left - Burger Icon & Logo */}
          <div className="flex items-center gap-4">
            {/* Burger icon*/}
            <Menu className="md:hidden text-2xl text-gray-700" />
            {/* Logo */}
            <div className="text-2xl font-bold text-green-700">
              Column<span className="text-black">9</span>
            </div>
          </div>

          {/* Center - Nav Links */}
          <ul className="hidden md:flex justify-center space-x-6 text-gray-700 font-medium">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Instructors</a>
            </li>
            <li>
              <a href="#">Schedules</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>

          {/* Right - Search and User Icons */}
          <div className="flex items-center justify-end space-x-4">
            {/* Search input */}
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search"
                className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {/* Search icon*/}
            <Search className="block md:hidden text-2xl text-gray-700" />
            {/* User Icon */}
            <CircleUserRound className="text-2xl text-gray-700" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full">
        {/* Mobile View */}
        <div className="block md:hidden relative w-full h-[80vh]">
          {/* Background Image */}
          <img
            src="/images/hero-front.png"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Text Content Over Image */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 text-center">
            <div>
              <h1 className="text-3xl font-bold leading-tight">
                Take your career to <br /> the next level.
              </h1>
              <p className="mt-2 text-base">With indispensable courses</p>
            </div>
          </div>
        </div>

        {/* Buttons Below the Image */}
        <div className="md:hidden px-4 py-4 flex justify-center gap-4">
          <button className="bg-gray-800 text-white px-4 py-2 rounded">
            Exams
          </button>
          <button className="bg-white text-gray-800 px-4 py-2 rounded font-medium">
            Our Courses
          </button>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex w-full h-[80vh] bg-teal-700 relative overflow-hidden">
          {/* Teal-tinted Background */}
          <img
            src="/images/hero-front.png"
            alt="Hero BG"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />

          {/* Content */}
          <div className="relative z-10 w-full flex items-center justify-between px-16">
            {/* Left Text */}
            <div className="text-white max-w-xl">
              <h1 className="text-5xl font-bold leading-tight">
                Take your career to <br /> the next level.
              </h1>
              <p className="mt-4 text-lg">With indispensable courses</p>
              <div className="mt-6 flex gap-4">
                <button className="bg-transparent border border-white px-4 py-2 rounded text-white hover:bg-white hover:text-teal-700 transition">
                  Exams
                </button>
                <button className="bg-white text-teal-700 px-4 py-2 rounded font-medium hover:bg-gray-100 transition">
                  Our Courses
                </button>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="shrink-0">
              <img
                src="/images/hero-front.png"
                alt="Hero"
                className="h-[400px] w-auto rounded-xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
