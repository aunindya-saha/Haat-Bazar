import React from "react";

const BuyerComplain = () => {
  return (
    <div className="container mx-auto mt-10 lg:mt-[100px]">
      <div className="border-t-2 border-b-2 border-gray-300 border-dashed p-6 lg:p-9 text-center">
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
          <div className="flex flex-col justify-between">
            <img src="farmer.png" alt="" className="p-4 h-70 md:h-50" />
          </div>
          <form noValidate className="space-y-6">
            <div className="flex flex-col justify-between">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                <div className="dark:text-gray-600">
                  You wanna share suggestions with us? Do share.
                </div>
              </div>
            </div>
            <div>
              <input
                id="name"
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full p-3 rounded dark:bg-gray-100"
              />
            </div>
            <div>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full p-3 rounded dark:bg-gray-100"
              />
            </div>
            <div>
              <textarea
                id="message"
                rows="3"
                placeholder="Your Message"
                className="input input-bordered w-full p-3 rounded dark:bg-gray-100"
              ></textarea>
            </div>
            <div>
              <input
                type="file"
                className="file-input file-input-bordered w-full p-3 rounded dark:bg-gray-100"
              />
            </div>
            <div>
              <button type="submit" className="btn btn-outline">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyerComplain;
