import React, { useState } from "react";
import DashboardContent from "./DashboardContent";

const Overview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const products = [
    {
      name: "Potato",
      dateAdded: "January 13, 2023",
      productId: "PDH88801",
      pricePerKg: "৳60",
      soldQuantity: 88,
    },
    {
      name: "Onion",
      dateAdded: "March 5, 2023",
      productId: "WUK68581",
      pricePerKg: "৳100",
      soldQuantity: 68,
    },
    {
      name: "Rice",
      dateAdded: "August 5, 2024",
      productId: "IUK167281",
      pricePerKg: "৳60",
      soldQuantity: 53,
    },
    {
      name: "Tomato",
      dateAdded: "July 7, 2022",
      productId: "EWT81201",
      pricePerKg: "৳60",
      soldQuantity: 48,
    },
    {
      name: "Gammaxin",
      dateAdded: "April 27, 2024",
      productId: "WKP98165",
      pricePerKg: "৳250",
      soldQuantity: 51,
    },
  ];

const filteredProducts = products.filter((product) =>
Object.values(product).some((value) =>
value.toString().toLowerCase().includes(searchTerm.toLowerCase())
)
);

  return (
    <div style={{ padding: "20px" }}>
      <DashboardContent />
      <h1 className="text-3xl font-bold text-black mt-20 mb-5 text-center">
        Product Overview
      </h1>
      <div className="mb-3 flex justify-end">
      <input
          type="text"
          placeholder="Search by any column..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
          style={{ width: "300px" }}
        />
        </div>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          margin: "0 auto",
          textAlign: "left",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2", color: "#000000" }}>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Date Added
            </th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Product ID
            </th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Price/Kg
            </th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Sold Quantity
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "" : "#f9f9f9",
              }}
            >
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {product?.name}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {product?.dateAdded}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {product?.productId}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {product?.pricePerKg}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {product?.soldQuantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Overview;
