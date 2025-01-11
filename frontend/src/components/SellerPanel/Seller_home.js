import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

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
    { region: "Rajshahi", product: "Mango", seller: "Karim Haque", price: 180 },
    { region: "Rajshahi", product: "Mango", seller: "Kuddus Molla", price: 120 },
    { region: "Dhaka", product: "Banana", seller: "Khairul Amin", price: 110 },
    { region: "Khulna", product: "Litchi", seller: "Tahmina Begum", price: 90 },
    { region: "Chittagong", product: "Potato", seller: "Karim Hossain", price: 190 },
    { region: "Sylhet", product: "Banana", seller: "Taslima Khatun", price: 40 },
    { region: "Dhaka", product: "Tomato", seller: "Sufia Begum", price: 20 },
    { region: "Rajshahi", product: "Rice", seller: "Nargis Parvin", price: 160 },
    { region: "Rangpur", product: "Wheat", seller: "Mahmudul Hasan", price: 160 },
    { region: "Chittagong", product: "Tomato", seller: "Arif Rahman", price: 120 },{ region: "Khulna", product: "Litchi", seller: "Tahmina Begum", price: 90 },
    { region: "Dhaka", product: "TSP", seller: "Nazrul Islam", price: 110 },
    { region: "Sylhet", product: "Potato", seller: "Rokeya Sultana", price: 50 },
    { region: "Chittagong", product: "Lentils", seller: "Kamal Hossain", price: 60 },
    { region: "Rangpur", product: "DAP", seller: "Farida Yasmin", price: 70 },
    { region: "Rajshahi", product: "Wheat", seller: "Jamil Chowdhury", price: 80 },
    { region: "Barishal", product: "Rice", seller: "Tahmina Bhuiyan", price: 100 },
    { region: "Chittagong", product: "Litchi", seller: "Saifur Rahman", price: 200 },
    { region: "Khulna", product: "DAP", seller: "Rubel Mia", price: 30 },
    { region: "Rajshahi", product: "Wheat", seller: "Habibur Rahman", price: 210 },
    { region: "Dhaka", product: "TSP", seller: "Azizur Rahman", price: 250 },
    { region: "Chittagong", product: "Lentils", seller: "Shahadat Hossain", price: 100 },
    { region: "Khulna", product: "Rice", seller: "Mahbubur Rahman", price: 30 },
    { region: "Barishal", product: "Jackfruit", seller: "Tahmina Begum", price: 60 },
    { region: "Barishal", product: "Guava", seller: "Rahim Uddin", price: 190 },
    { region: "Rangpur", product: "Jackfruit", seller: "Faruk Ahmed", price: 170 },
    { region: "Rngpur", product: "Guava", seller: "Arifa Begum", price: 130 },
  ];

  const filteredProducts = productData.filter(
    (item) =>
      (region === "" || item.region === region) &&
      (mainCategory === "" || subcategories[mainCategory]?.includes(item.product)) &&
      (subCategory === "" || item.product.toLowerCase() === subCategory) &&
      (searchQuery === "" || item.product.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCategoryChange = (e) => {
    setMainCategory(e.target.value);
    setSubCategory("");
  };

  const drawPieChart = () => {
    const canvas = document.getElementById("myPieChart");
    const ctx = canvas.getContext("2d");

    // Calculate average prices for each product
    const productMap = {};
    filteredProducts.forEach((item) => {
      if (!productMap[item.product]) {
        productMap[item.product] = { total: 0, count: 0 };
      }
      productMap[item.product].total += item.price;
      productMap[item.product].count += 1;
    });

    const labels = Object.keys(productMap);
    const data = labels.map((label) => productMap[label].total / productMap[label].count);

    // Destroy the previous chart instance if it exists
    if (window.myChart) {
      window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels,
        datasets: [
          {
            label: "Average Price",
            data,
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
            ],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  };

  useEffect(() => {
    drawPieChart();
  }, [filteredProducts]);

  return (
    <div className="container mx-auto mt-0 text-center">
      <div>
        <h1 className="text-xl lg:text-4xl font-extrabold">Seller Center</h1>
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
            <option value="">Select Division</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Barishal">Barishal</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Khulna">Khulna</option>
            <option value="Sylhet">Sylhet</option>
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

        <div className="overflow-x-auto mt-8">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th>Division</th>
                <th>Product Name</th>
                <th>Seller Name</th>
                <th>Price (৳)</th>
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

        <div className="mt-8 flex flex-col items-center">
  <h2 className="text-xl font-bold mb-4">Average Product Prices</h2>
  <div className="w-1/2">
    <canvas id="myPieChart"></canvas>
  </div>
</div>
      </div>
    </div>
  );
};

export default SellerHome;
