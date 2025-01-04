import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginBg from "../../images/Banner-1.jpg"; // Import background


const SignUp = () => {
  const [accountType, setAccountType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    dob: "",  // Single field for dob
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState(""); // For storing username error
  const navigate = useNavigate();

  const handleAccountChange = (e) => {
    setAccountType(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
  e.preventDefault();
  
  const requestBody = {
    ...formData,
    dob: formData.dob,  // Send dob as is (YYYY-MM-DD)
  };

  try {
    const response = await fetch(`http://localhost:8081/api/signup/${accountType}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    if (data.success) {
      alert("Account created successfully!");
      navigate("/");
    } else if (response.status === 409) {
      setUsernameError(data.message);
      setFormData({
        name: "",
        username: "",
        email: "",
        phone: "",
        address: "",
        gender: "",
        dob: "",  
        password: ""
      });
    } else {
      alert("Failed to create account");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("There was an error with the registration");
  }
};


  return (
     <div
          className="min-h-screen bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${loginBg})` }}
        >
    <div>
      <h1 className="text-center text-4xl font-bold text-gray-200 mt-6 mb-3">
        <span className="text-red-600">হাট </span>
        <span className="text-green-600">বাজার </span>
      </h1>
      <div className="flex justify-center items-center">
        <div className="bg-gray-900 p-10 rounded-lg shadow-lg w-full max-w-xl">
          <h2 className="text-white text-2xl font-bold text-center mb-6">
            Sign Up for an Account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="account">
                Select Account
              </label>
              <select
                id="account"
                onChange={handleAccountChange}
                className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Choose your account</option>
                <option value="donor">Buyer</option>
                <option value="volunteer">Seller</option>
              </select>
            </div>

            {accountType && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    onChange={handleChange}
                    placeholder="Full name"
                    value={formData.name}
                    className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    onChange={handleChange}
                    value={formData.username}
                    className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  {usernameError && (
                    <p className="text-red-500 text-sm mt-1">{usernameError}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    onChange={handleChange}
                    value={formData.email}
                    className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    onChange={handleChange}
                    value={formData.phone}
                    className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="address">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    onChange={handleChange}
                    value={formData.address}
                    className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="gender">
                    Gender
                  </label>
                  <select
                    id="gender"
                    onChange={handleChange}
                    value={formData.gender}
                    className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="dob">
          Date of Birth
        </label>
        <input
          id="dob"
          type="date"
          onChange={handleChange}
          value={formData.dob}
          className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      onChange={handleChange}
                      value={formData.password}
                      className="w-full p-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Sign Up
                </button>
              </>
            )}

            <p className="text-gray-400 text-center mt-4">
              Already have an account?{" "}
              <div className="text-blue-600 hover:text-blue-500">
                <Link to="/signin">Sign In</Link>
              </div>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
