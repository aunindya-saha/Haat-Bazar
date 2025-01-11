import React, { useState } from "react";
import chasha from '../../images/Seller/chasha.png';

const SellerSell = () => {
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [details, setDetails] = useState("");
  const [file, setFile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const subcategories = {
    granary: ["Rice", "Wheat", "Lentils", "Corn", "Sugarcane"],
    fish: ["Rohu", "Catla", "Tilapia", "Pangas", "Shrimp"],
    poultry: ["Chicken", "Duck", "Chicken Eggs", "Pigeons", "Broilers"],
    vegetables: ["Potato", "Tomato", "Brinjal", "Pumpkin", "Bottle Gourd"],
    pesticides: ["Malathion", "Carbofuran", "Diazinon", "Chlorpyrifos", "Dimethoate"],
    fertilizers: ["Urea", "TSP", "DAP", "Potash", "Organic Compost"],
    fruits: ["Mango", "Banana", "Guava", "Jackfruit", "Litchi"],
    flowers: ["Rose", "Marigold", "Jasmine", "Sunflower", "Tube Rose"],
  };

  const handleMainCategoryChange = (e) => {
    setMainCategory(e.target.value);
    setSubCategory(""); // Reset subcategory when main category changes
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("mainCategory", mainCategory);
    formData.append("subCategory", subCategory);
    formData.append("quantity", quantity);
    formData.append("unitPrice", unitPrice);
    formData.append("details", details);
    if (file) {
      formData.append("file", file);
    }

    // Example: Simulate a file upload or data submission
    console.log("Form Submitted:", {
      mainCategory,
      subCategory,
      quantity,
      unitPrice,
      details,
      file,
    });

    // Show the popup
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container mx-auto mt-0 lg:mt-[100px] bg-[#365314]">
      <div className="border-t-2 border-b-2 border-gray-300 border-dashed p-6 lg:p-9 text-center">
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
          <div className="flex flex-col justify-between">
            <img src={chasha} alt="" className="p-4 h-70 md:h-50" />
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Sell Your Product!</h2>
              <div className="dark:text-gray-600">Please give information about product</div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="w-full md:w-1/2">
                <select
                  value={mainCategory}
                  onChange={handleMainCategoryChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="">Product Category</option>
                  {Object.keys(subcategories).map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full md:w-1/2">
                <select
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="">Product Sub-category</option>
                  {mainCategory &&
                    subcategories[mainCategory]?.map((sub) => (
                      <option key={sub} value={sub.toLowerCase()}>
                        {sub}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Product Quantity (KG)"
              className="input input-bordered w-full p-3 rounded dark:bg-gray-100"
            />

            <input
              type="text"
              value={unitPrice}
              onChange={(e) => setUnitPrice(e.target.value)}
              placeholder="Unit Price"
              className="input input-bordered w-full p-3 rounded dark:bg-gray-100"
            />

            <textarea
              rows="3"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Description of Product"
              className="input input-bordered w-full p-3 rounded dark:bg-gray-100"
            ></textarea>

            <input
              type="file"
              onChange={handleFileChange}
              className="file-input file-input-bordered w-full p-3 rounded dark:bg-gray-100"
            />

             <div className="bg-blue-600 hover:bg-green-600 hover:scale-105 transition-all duration-200 ease-in-out w-50 rounded-lg mx-auto ">
              <button
                type="submit"
                className="btn w-full p-3 rounded  text-white "
              >
                Submit Complain
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Your Product has been added</h2>
            <button
              onClick={closePopup}
              className="btn btn-primary px-4 py-2 rounded"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerSell;
