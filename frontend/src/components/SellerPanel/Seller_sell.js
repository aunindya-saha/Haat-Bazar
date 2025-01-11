import React, { useState } from "react";

const SellerSell = () => {
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [details, setDetails] = useState("");
  const [file, setFile] = useState(null);

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
  };

  return (
    <div className="container mx-auto mt-10 lg:mt-[100px]">
      <div className="border-t-2 border-b-2 border-gray-300 border-dashed p-6 lg:p-9 text-center">
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
          <div className="flex flex-col justify-between">
            <img src="bd.jpeg" alt="" className="p-4 h-70 md:h-50" />
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold leading-tight lg:text-3xl">
                আপনার পণ্য বিক্রি করুন
              </h2>
              <div className="dark:text-gray-600">পণ্য সম্পর্কিত তথ্য প্রদান করুন</div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="w-full md:w-1/2">
                <select
                  value={mainCategory}
                  onChange={handleMainCategoryChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="">পণ্যের ক্যাটাগরি</option>
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
                  <option value="">পণ্যের সাবক্যাটাগরি</option>
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
              placeholder="পণ্যের পরিমাণ (KG)"
              className="input input-bordered w-full p-3 rounded dark:bg-gray-100"
            />

            <input
              type="text"
              value={unitPrice}
              onChange={(e) => setUnitPrice(e.target.value)}
              placeholder="একক মূল্য"
              className="input input-bordered w-full p-3 rounded dark:bg-gray-100"
            />

            <textarea
              rows="3"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="পণ্য সম্পর্কে বিস্তারিত"
              className="input input-bordered w-full p-3 rounded dark:bg-gray-100"
            ></textarea>

            <input
              type="file"
              onChange={handleFileChange}
              className="file-input file-input-bordered w-full p-3 rounded dark:bg-gray-100"
            />

            <button type="submit" className="btn btn-outline">
              আপলোড
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerSell;
