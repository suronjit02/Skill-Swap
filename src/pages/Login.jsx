import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { logIn, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();
    // console.log("log in clicked");

    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then(() => {
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();

    googleLogin()
      .then(() => {
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.code);
      });
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

          {error && <p className="text-red-600">{error}</p>}

          <p className="text-sm text-[#3DB66F] cursor-pointer text-right hover:underline">
            Forgot Password?
          </p>
        </div>

        <button className="btn mt-6 w-full bg-[#3DB66F] text-white hover:bg-[#2f9c5c] transition">
          Login
        </button>

        <p className="my-1 text-center">or</p>

        {/* google login button */}
        <button
          onClick={handleGoogleLogin}
          className="btn w-full bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
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
