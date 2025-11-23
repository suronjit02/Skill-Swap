import { FaStar } from "react-icons/fa";
import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const [userStories, setUserStories] = useState([]);

  useEffect(() => {
    fetch("/userStories.json")
      .then((res) => res.json())
      .then((data) => {
        setUserStories(data);
      });
  }, []);

  return (
    <div data-aos="fade-up" className="my-20 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-3">What Learners Say</h2>
      <p className="text-center text-gray-600 mb-10">
        Real experiences from SkillSwap learners 💬
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {userStories.map((story) => (
          <div
            key={story.id}
            data-aos-duration="700"
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border"
          >
            <div className="flex items-center gap-4">
              <img
                src={story.img}
                className="w-14 h-14 rounded-full object-cover border"
                alt={story.name}
              />
              <div>
                <h3 className="text-lg font-semibold">{story.name}</h3>
                <p className="text-sm text-gray-500">{story.skill}</p>
              </div>
            </div>

            <p className="text-gray-700 mt-4 italic">“{story.quote}”</p>

            <div className="flex items-center gap-1 mt-4 text-yellow-500">
              {Array(story.rating)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
