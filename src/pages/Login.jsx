import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    // console.log("log in clicked");

    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password);
    e.target.remove;
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleLogIn}
        className="w-full max-w-md bg-white rounded-md border border-green-200 shadow-md p-8"
      >
        <h2 className="text-2xl font-bold text-center text-[#3DB66F] mb-6">
          Please Login
        </h2>

        <div className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered focus:outline-none w-full"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input focus:outline-none w-full"
            />
          </div>

          <p className="text-sm text-[#3DB66F] cursor-pointer text-right hover:underline">
            Forgot Password?
          </p>
        </div>

        <button className="btn mt-6 w-full bg-[#3DB66F] text-white hover:bg-[#2f9c5c] transition">
          Login
        </button>

        <p className="mt-10 text-center text-sm">
          Don't have an account?{" "}
          <Link to={"/signup"} className="hover:underline text-[#3DB66F]">
            {" "}
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
