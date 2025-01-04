import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/haatbazar-logo.png"; // Import logo
import loginBg from "../../images/Banner-1.jpg"; // Import background

const Signin = () => {
  const [formData, setFormData] = useState({
    account: "",
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.account || !formData.username || !formData.password) {
      setErrorMessage("All fields are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:8081/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Save account type and username to localStorage
        localStorage.setItem("role", formData.account);
        localStorage.setItem("userid", formData.username);

        // Navigate based on account type
        if (formData.account === "admin") {
          navigate("/adminDashboard");
        } else if (formData.account === "staff") {
          navigate("/staffDashboard");
        } else if (formData.account === "needy people") {
          navigate("/needyPeople");
        } else if (formData.account === "donor") {
          navigate("/donorDashboard");
        } else if (formData.account === "volunteer") {
          navigate("/volunteerDashboard");
        }

        // Reload page after navigation
        window.location.reload();
      } else {
        setErrorMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred during login. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="flex w-full max-w-5xl">
        {/* Left Section */}
        <div className="w-1/2 flex flex-col items-start justify-center p-10">
          <img src={logo} alt="Logo" className="w-32 h-32 mb-4" />
          <p className="text-black text-2xl font-bold leading-relaxed">
            হাটবাজার: আপনার বিশ্বস্ত অনলাইন <br /> কৃষিপণ্য কেনাবেচার ঠিকানা
          </p>
        </div>

        {/* Sign-in Box */}
        <div className="w-1/2 bg-black bg-opacity-75 p-10 rounded-lg shadow-lg">
          <h2 className="text-white text-2xl font-bold text-center mb-6">
            Sign in to your account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="account"
              >
                Select Account
              </label>
              <select
                id="account"
                value={formData.account}
                onChange={handleChange}
                className="w-full p-2 bg-transparent border border-gray-300 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="" className="bg-transparent text-black">Choose your account</option>
                <option value="admin" className="bg-transparent text-black">Buyer</option>
                <option value="staff" className="bg-transparent text-black">User</option>
              
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter Username"
                className="w-full p-2 bg-transparent border border-gray-300 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full p-2 bg-transparent border border-gray-300 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            {errorMessage && (
              <div className="text-red-500 text-center mb-4">
                {errorMessage}
              </div>
            )}
            <input
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              value="Sign in"
            />
            <div className="text-gray-400 text-center mt-4">
              Do not have an account yet?{" "}
              <Link
                to="/signup"
                className="text-blue-600 hover:text-blue-500 inline"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
