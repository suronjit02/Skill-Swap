import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation } from "react-router";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();

  const [email, setEmail] = useState(location.state?.email || "");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    resetPassword(email)
      .then(() => {
        setMessage("Reset link sent! Check your Gmail.");
        setError("");

        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        setError(error.code);
        setMessage("");
      });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleReset}
        className="w-full max-w-md bg-white rounded-md border border-green-200 shadow-md p-8"
      >
        <h2 className="text-2xl font-bold text-center text-[#3DB66F] mb-6">
          Reset Password
        </h2>

        <label className="font-semibold mb-1">Email</label>
        <input
          type="email"
          value={email}
          required
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
        />

        {message && <p className="text-green-600 mt-2">{message}</p>}
        {error && <p className="text-red-600 mt-2">{error}</p>}

        <button className="btn mt-6 w-full bg-[#3DB66F] text-white">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
