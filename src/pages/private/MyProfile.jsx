import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { HiOutlineUserCircle } from "react-icons/hi";
import { toast } from "react-hot-toast";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [updating, setUpdating] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="max-w-6xl mx-auto min-h-screen p-6 space-y-10">
      <h2 className="text-3xl font-bold text-center">My Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* left section */}
        <div className="bg-white border border-green-200 rounded-lg p-6 shadow flex flex-col items-center">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="User"
              className="w-32 h-32 rounded-full object-cover"
            />
          ) : (
            <HiOutlineUserCircle className="text-9xl text-gray-400" />
          )}

          <h3 className="text-2xl font-bold mt-4">{user?.displayName}</h3>
          <p className="text-gray-600">{user?.email}</p>

          <div className="mt-6 w-full space-y-2">
            <div className="flex justify-between border-b py-2">
              <p className="text-gray-500">Role</p>
              <p className="font-medium">User</p>
            </div>
            <div className="flex justify-between border-b py-2">
              <p className="text-gray-500">Account Status</p>
              <p className="font-medium text-green-600">Active</p>
            </div>
            <div className="flex justify-between border-b py-2">
              <p className="text-gray-500">Joined</p>
              <p className="font-medium">2025</p>
            </div>
            <div className="flex justify-between py-2">
              <p className="text-gray-500">Membership</p>
              <p className="font-medium">Free Tier</p>
            </div>
          </div>

          <button
            onClick={() => setUpdating(!updating)}
            className="btn bg-[#3DB66F] text-white w-full mt-6 hover:bg-green-600 transition"
          >
            {updating ? "Close Update Form" : "Update Profile"}
          </button>

          {/* Update Form */}
          {updating && (
            <div className="bg-white p-6 mt-5">
              <h3 className="text-xl font-semibold mb-4">Update Profile</h3>

              <form className="space-y-4" onSubmit={handleUpdate}>
                <input
                  type="text"
                  placeholder="Update Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  placeholder="Update Photo URL"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className="input input-bordered w-full"
                />

                <button
                  type="submit"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-[#3DB66F] font-bold btn transition-all duration-300 w-full"
                >
                  Save Changes
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-3">Hey!</h3>
            <p className="text-gray-600 leading-relaxed">
              Welcome to your SkillSwap profile! Here you can manage your
              learning identity — update your basic info, track your activities,
              and grow your skill-sharing journey. SkillSwap makes learning
              social, where people teach and learn from each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 shadow text-center">
              <p className="text-gray-500">Total Login</p>
              <h2 className="text-2xl font-bold">34</h2>
            </div>
            <div className="bg-white rounded-lg p-6 shadow text-center">
              <p className="text-gray-500">Projects Joined</p>
              <h2 className="text-2xl font-bold">5</h2>
            </div>
            <div className="bg-white rounded-lg p-6 shadow text-center">
              <p className="text-gray-500">Profile Score</p>
              <h2 className="text-2xl font-bold">82%</h2>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-3">Recent Activity</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✔ Logged in yesterday</li>
              <li>✔ Updated profile picture 5 days ago</li>
              <li>✔ Joined 1 new project</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
