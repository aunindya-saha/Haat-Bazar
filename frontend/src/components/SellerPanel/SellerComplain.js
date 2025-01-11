import React, { useState } from "react";
import farmer from "../../images/Buyer/farmer.png";

const SellerComplain = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Your complaint has been submitted successfully!");
    setTimeout(() => {
      setMessage(""); // Clear the message after 3 seconds
    }, 3000);
  };

  return (
    <div className="container mx-auto mt-0 lg:mt-[100px] bg-[#365314]">
      <div className="border-t-2 border-b-2 border-gray-300 border-dashed p-6 lg:p-9 text-center">
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
          {/* Left Side */}
          <div className="flex flex-col justify-between">
            <img src={farmer} alt="Farmer" className="p-4 h-70 md:h-50" />
          </div>

          {/* Form */}
          <form
            noValidate
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col justify-between">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                  Let's talk!
                </h2>
                <div className="dark:text-gray-600">
                  You wanna share suggestions with us? Do share.
                </div>
              </div>
            </div>

            {/* Input Fields */}
            <div>
              <input
                id="name"
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded border border-gray-400 dark:bg-gray-100"
              />
            </div>
            <div>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded border border-gray-400 dark:bg-gray-100"
              />
            </div>
            <div>
              <textarea
                id="message"
                rows="3"
                placeholder="Your Message"
                className="w-full p-3 rounded border border-gray-400 dark:bg-gray-100"
              ></textarea>
            </div>
            <div>
              <input
                type="file"
                className="file-input file-input-bordered w-full p-3 rounded border border-gray-400 dark:bg-gray-100"
              />
            </div>

            {/* Submit Button */}
            <div className="bg-blue-600 hover:bg-green-600 hover:scale-105 transition-all duration-200 ease-in-out w-50 rounded-lg mx-auto ">
              <button
                type="submit"
                className="btn w-full p-3 rounded  text-white "
              >
                Submit Complain
              </button>
            </div>

            {/* Success Message */}
            {message && (
              <div className="mt-4 text-green-600 font-semibold">
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerComplain;