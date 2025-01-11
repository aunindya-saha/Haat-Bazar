import React, { useState, useEffect } from "react";

const SellerHome = () => {
  const [region, setRegion] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

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

  const productData = [
    { region: "রাজশাহী", product: "আম", seller: "করিম হক", price: 180 },
    { region: "রাজশাহী", product: "আম", seller: "কুদ্দুস মোল্লা", price: 120 },
    { region: "রাজশাহী", product: "আম", seller: "খাইরুল আমিন", price: 110 },
    { region: "রাজশাহী", product: "আম", seller: "তাহমিনা বেগম", price: 90 },
  ];

  const filteredProducts = productData.filter(
    (item) =>
      (region === "" || item.region === region) &&
      (searchQuery === "" || item.product.includes(searchQuery))
  );

  const handleCategoryChange = (e) => {
    setMainCategory(e.target.value);
    setSubCategory("");
  };

  const drawChart = () => {
    const canvas = document.getElementById("myBarChart");
    const ctx = canvas.getContext("2d");

    // Clear previous chart
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const labels = filteredProducts.map((item) => item.seller);
    const data = filteredProducts.map((item) => item.price);

    const chartWidth = canvas.width - 100;
    const chartHeight = canvas.height - 50;
    const barWidth = chartWidth / data.length - 10;
    const maxDataValue = Math.max(...data);
    const scale = chartHeight / maxDataValue;

    // Draw X and Y axis
    ctx.beginPath();
    ctx.moveTo(50, 0);
    ctx.lineTo(50, chartHeight);
    ctx.lineTo(chartWidth + 50, chartHeight);
    ctx.stroke();

    // Draw bars
    data.forEach((value, index) => {
      const barHeight = value * scale;
      const x = 60 + index * (barWidth + 10);
      const y = chartHeight - barHeight;

      ctx.fillStyle = "rgba(75, 192, 192, 0.5)";
      ctx.fillRect(x, y, barWidth, barHeight);

      // Add labels
      ctx.fillStyle = "#000";
      ctx.fillText(labels[index], x + barWidth / 4, chartHeight + 15);
      ctx.fillText(value, x + barWidth / 4, y - 5);
    });
  };

  useEffect(() => {
    drawChart();
  }, [filteredProducts]);

  return (
    <div className="container mx-auto mt-10 lg:mt-[100px]">
      <div className="border-t-2 border-b-2 border-gray-300 border-dashed p-6 lg:p-9 text-center">
        <h2 className="text-xl lg:text-4xl font-extrabold">সেলার সেন্টার</h2>
        <form className="max-w-md mx-auto mt-6">
          <input
            type="search"
            className="block w-full p-4 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <form className="max-w-sm mx-auto mt-4">
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="block w-full p-2.5 border border-gray-300 rounded-lg"
          >
            <option value="">অঞ্চল বাছাই করুন</option>
            <option value="রাজশাহী">রাজশাহী</option>
            <option value="ঢাকা">ঢাকা</option>
          </select>
        </form>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <select
            value={mainCategory}
            onChange={handleCategoryChange}
            className="block w-full p-2.5 border border-gray-300 rounded-lg"
          >
            <option value="">Select category</option>
            {Object.keys(subcategories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="block w-full p-2.5 border border-gray-300 rounded-lg"
          >
            <option value="">Select subcategory</option>
            {(subcategories[mainCategory] || []).map((sub) => (
              <option key={sub} value={sub.toLowerCase()}>
                {sub}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            drawChart();
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-6"
        >
          Apply
        </button>

        <div className="overflow-x-auto mt-8">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th>অঞ্চল</th>
                <th>পণ্য</th>
                <th>বিক্রেতা</th>
                <th>মূল্য (৳)</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((item, index) => (
                <tr key={index}>
                  <td>{item.region}</td>
                  <td>{item.product}</td>
                  <td>{item.seller}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <canvas id="myBarChart" width="400" height="200"></canvas>
        </div>
      </div>
    </div>
  );
};

export default SellerHome;
