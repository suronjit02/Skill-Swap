import React from "react";
import {
  FaSearch,
  FaUserFriends,
  FaGraduationCap,
  FaGift,
} from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section data-aos="fade-up" className="py-16 bg-gray-50 pb-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-transparent border border-green-200 rounded-lg p-6 hover:shadow-sm transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FaSearch size={30} className="text-[#3DB66F]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Browse Skills</h3>
            <p className="text-gray-600">
              Explore available skills from local providers in your area.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-transparent border border-green-200 rounded-lg p-6 hover:shadow-sm transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FaUserFriends size={30} className="text-[#3DB66F]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Connect with Provider
            </h3>
            <p className="text-gray-600">
              Contact or book sessions with providers easily.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-transparent border border-green-200 rounded-lg p-6 hover:shadow-sm transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FaGraduationCap size={30} className="text-[#3DB66F]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Learn & Grow</h3>
            <p className="text-gray-600">
              Join sessions and improve your skills step by step.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-transparent border border-green-200 rounded-lg p-6 hover:shadow-sm transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FaGift size={30} className="text-[#3DB66F]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Share Your Skill</h3>
            <p className="text-gray-600">
              Offer your own skills and earn from teaching others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
