import React, { useEffect, useState } from "react";

const TopProviders = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetch("/providers.json")
      .then((res) => res.json())
      .then((data) => {
        setProviders(data);
      });
  }, []);

  return (
    <div className="mx-20 my-40 ">
      <h2 className="text-2xl mb-10 text-center font-semibold text-[#3DB66F] ">
        Top Rated Providers
      </h2>

      <div className="grid grid-cols-3 gap-5 mt-5">
        {providers.map((provider) => (
          <div
            key={provider.id}
            className="border p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 bg-white"
          >
            <div className="flex items-center gap-4">
              <img
                src={provider.photo}
                alt={provider.name}
                className="w-16 h-16 rounded-full object-cover border"
              />

              <div>
                <h3 className="text-lg font-semibold">{provider.name}</h3>

                <p className="text-sm text-gray-600">
                  ⭐ {provider.rating} / 5 · {provider.reviews} reviews
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700 font-medium">
              Skill: <span className="text-[#3DB66F]">{provider.skill}</span>
            </p>

            <button className="mt-4 w-full bg-[#3DB66F] text-white py-2 rounded-lg hover:bg-[#2f9c5c] transition">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProviders;
