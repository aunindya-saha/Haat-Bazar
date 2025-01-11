import React from "react";

const BuyerOrderHistory = () => {
  return (
    <div className="container mx-auto mt-10 lg:mt-[100px]">
      {/* History Section */}
      <div className="border-t-2 border-b-2 border-gray-300 border-dashed p-6 lg:p-9 text-center">
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Previous Order History
          </h2>

          {/* Search Section */}
          <form className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>

          <br />

          {/* Order History Table */}
          <div className="overflow-x-auto">
            <table className="w-full p-6 text-xs text-left whitespace-nowrap">
              <colgroup>
                <col className="w-5" />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="w-5" />
              </colgroup>
              <thead>
                <tr className="dark:bg-gray-300">
                  <th className="p-3">A-Z</th>
                  <th className="p-3">Order Price</th>
                  <th className="p-3">Job title</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Address</th>
                  <th className="p-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                {[
                  {
                    name: "Dwight Adams",
                    job: "UI Designer",
                    company: "Spirit Media",
                    phone: "555-873-9812",
                    email: "dwight@adams.com",
                    address: "71 Cherry Court, SO, United Kingdom",
                  },
                  {
                    name: "Richie Allen",
                    job: "Geothermal Technician",
                    company: "Icecorps",
                    phone: "555-129-0761",
                    email: "richie@allen.com",
                    address: "Knesebeckstrasse 32, Obersteinebach, Germany",
                  },
                  {
                    name: "Alex Bridges",
                    job: "Administrative Services Manager",
                    company: "Smilectronics",
                    phone: "555-238-9890",
                    email: "alex@bridges.com",
                    address: "Hooivelden 117, Kortrijk, Belgium",
                  },
                  {
                    name: "Mariah Claxton",
                    job: "Nuclear Technician",
                    company: "White Wolf Brews",
                    phone: "555-654-9810",
                    email: "mariah@claxton.com",
                    address: "R Oliveirinhas 71, Maia, Portugal",
                  },
                ].map((item, index) => (
                  <tr key={index}>
                    <td className="px-3 text-2xl font-medium dark:text-gray-600">
                      {item.name.charAt(0)}
                    </td>
                    <td className="px-3 py-2">
                      <p>{item.name}</p>
                    </td>
                    <td className="px-3 py-2">
                      <span>{item.job}</span>
                      <p className="dark:text-gray-600">{item.company}</p>
                    </td>
                    <td className="px-3 py-2">
                      <p>{item.phone}</p>
                    </td>
                    <td className="px-3 py-2">
                      <p>{item.email}</p>
                    </td>
                    <td className="px-3 py-2">
                      <p>{item.address}</p>
                    </td>
                    <td className="px-3 py-2">
                      <button
                        type="button"
                        title="Open details"
                        className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 fill-current"
                        >
                          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerOrderHistory;
