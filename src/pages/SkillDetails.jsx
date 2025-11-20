import { useLoaderData, useParams } from "react-router";
import { toast } from "react-hot-toast";

const SkillDetails = () => {
  const { id } = useParams();
  const skills = useLoaderData();

  const skill = skills.find((skill) => skill.skillId == id);

  //   console.log(id);

  if (!skill) return <div className="text-center py-20">Loading...</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("🎉 Session booked successfully!", {
      duration: 4000,
      style: { padding: "10px", borderRadius: "5px", width: "400px" },
      icon: "",
    });
    e.target.reset();
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <section className="grid grid-cols-3">
        <div className="col-span-1 ">
          <h1 className="text-3xl font-bold mb-3 ">{skill.skillName}</h1>

          <div className="space-y-2 text-gray-800">
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

        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full rounded-xl shadow-lg col-span-2 max-h-100"
        />
      </section>

      <section className="grid grid-cols-3 mt-10 gap-5">
        <p className="text-gray-700 mb-4 col-span-2 text-justify">
          {skill.description}
        </p>

        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-4">Book a Session</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
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
              className="btn bg-[#3DB66F] text-white w-full hover:bg-[#2f9c5c]"
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
