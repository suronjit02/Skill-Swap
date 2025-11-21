import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { HiOutlineUserCircle } from "react-icons/hi";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [updating, setUpdating] = useState(false);

  return (
    <div className="max-w-6xl mx-auto min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-10 text-center">My Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-white border border-green-200 rounded-sm p-6 shadow">
          <div className="flex flex-col items-center">
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
              type=""
              className="btn bg-[#3DB66F] text-white w-full mt-6"
              onClick={() => setUpdating(!updating)}
            >
              {updating ? "Close Update Form" : "Update Profile"}
            </button>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-sm p-6 shadow">
            <h3 className="text-xl font-semibold mb-3">Hey !</h3>
            <p className="text-gray-600 leading-relaxed">
              Welcome to your SkillSwap profile! Here you can manage your
              learning identity — update your basic info, track your activities,
              and grow your skill-sharing journey. SkillSwap makes learning
              social, where people teach and learn from each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-sm p-6 shadow">
              <p className="text-gray-500">Total Login</p>
              <h2 className="text-2xl font-bold">34</h2>
            </div>
            <div className="bg-white rounded-sm p-6 shadow">
              <p className="text-gray-500">Projects Joined</p>
              <h2 className="text-2xl font-bold">5</h2>
            </div>
            <div className="bg-white rounded-sm p-6 shadow">
              <p className="text-gray-500">Profile Score</p>
              <h2 className="text-2xl font-bold">82%</h2>
            </div>
          </div>

          <div className="bg-white rounded-sm p-6 shadow">
            <h3 className="text-xl font-semibold mb-3">Recent Activity</h3>
            <ul className="space-y-2 text-gray-600">
              <li>✔ Logged in yesterday</li>
              <li>✔ Updated profile picture 5 days ago</li>
              <li>✔ Joined 1 new project</li>
            </ul>
          </div>

          {updating && (
            <div className="bg-white border rounded-sm p-6 shadow">
              <h3 className="text-xl font-semibold mb-4">Update Profile</h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Update Name"
                  defaultValue={user?.displayName}
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  placeholder="Update Photo URL"
                  defaultValue={user?.photoURL}
                  className="input input-bordered w-full"
                />

                <span className="btn bg-[#3DB66F] text-white">
                  Save Changes
                </span>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
