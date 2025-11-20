import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { use } from "react";

const SignUp = () => {
  const { createUser } = use(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    // console.log("clicked");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;

    createUser(email, password, name, photoUrl)
      .then((result) => {
      
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSignUp}
        className="w-full max-w-md bg-white rounded-md border border-green-200 shadow-md p-8"
      >
        <h2 className="text-2xl font-bold text-center text-[#3DB66F] mb-6">
          Please Sign Up
        </h2>

        <div className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Name</label>
            <input
              required
              type="text"
              name="name"
              placeholder="Write your name here"
              className="input input-bordered focus:outline-none w-full"
            />
          </div>
          {/* Photo Url */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Photo Url</label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Photo Url"
              className="input input-bordered focus:outline-none w-full"
            />
          </div>
          {/* Email */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="Email here"
              className="input input-bordered focus:outline-none w-full"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Password</label>
            <input
              required
              type="password"
              name="password"
              placeholder="Password here"
              className="input focus:outline-none w-full"
            />
          </div>
        </div>

        <button className="btn mt-6 w-full bg-[#3DB66F] text-white hover:bg-[#2f9c5c] transition">
          Sign Up
        </button>

        <p className="mt-10 text-center text-sm">
          Already have an account?{" "}
          <Link to={"/login"} className="hover:underline text-[#3DB66F]">
            {" "}
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
