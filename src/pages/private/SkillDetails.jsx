import { useLoaderData, useParams } from "react-router";
import { toast } from "react-hot-toast";

const SkillDetails = () => {
  const { id } = useParams();
  const skills = useLoaderData();

  const skill = skills.find((skill) => skill.skillId == id);

  if (!skill) return <div className="text-center py-20">Loading...</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("🎉 Session booked successfully!", {
      duration: 4000,
      style: { padding: "10px", borderRadius: "5px", width: "100%" },
      icon: "",
    });
    e.target.reset();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Skill Info + Image */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">
            {skill.skillName}
          </h1>
          <div className="space-y-2 text-gray-800 text-sm sm:text-base">
            <p>
              <strong>Category:</strong> {skill.category}
            </p>
            <p>
              <strong>Provider:</strong> {skill.providerName}
            </p>
            <p>
              <strong>Email:</strong> {skill.providerEmail}
            </p>
            <p>
              <strong>Price:</strong> ${skill.price}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {skill.rating}
            </p>
            <p>
              <strong>Slots Available:</strong> {skill.slotsAvailable}
            </p>
          </div>
        </div>

        <div className="md:col-span-2">
          <img
            src={skill.image}
            alt={skill.skillName}
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Description + Booking Form */}
      <section className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6">
        <p className="text-gray-700 mb-4 md:col-span-2 text-justify text-sm sm:text-base">
          {skill.description}
        </p>

        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Book a Session</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="input input-bordered w-full"
            />
            <button
              type="submit"
              className="btn bg-[#3DB66F] text-white w-full hover:bg-[#2f9c5c] transition py-2"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SkillDetails;
