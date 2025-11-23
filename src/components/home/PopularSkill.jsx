import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const PopularSkill = ({ skills }) => {
  // console.log(skills);

  return (
    <div data-aos="fade-up" className="my-30 px-20">
      <div className="my-10 text-center">
        <h2 className="text-2xl mb-2 font-semibold text-[#3DB66F] ">
          Popular Skills
        </h2>
        <p>
          Discover the most sought-after skills in our community. <br /> Whether
          you want to learn or teach, there's something for everyone.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 ">
        {skills.slice(0, 6).map((skill) => (
          <div
            key={skill.skillId}
            className="border border-green-100 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
          >
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{skill.skillName}</h3>

              <div className="flex justify-between">
                <p className="text-gray-800 font-medium mb-3">
                  Per Session: ${skill.price}
                </p>

                <div className="flex items-center mb-2">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-sm text-gray-600">{skill.rating}</span>
                </div>
              </div>

              <Link
                to={`/details/${skill.skillId}`}
                className="btn w-full bg-[#3DB66F] text-white py-2 rounded-md hover:bg-[#2f9c5c] transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSkill;
