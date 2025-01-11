import React, { useState } from "react";

const Overview = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const totalTransaction = 6430; // Example total transaction value
  const buyerPercentage = 55.56; // Example buyer percentage
  const sellerPercentage = 44.44; // Example seller percentage
  const buyerCount = 5; // Number of buyers
  const sellerCount = 4; // Number of sellers
  const buyerProducts = 50; // Example buyer product count
  const sellerProducts = 60; // Example seller product count

  const productTableData = [
    { id: 1, name: "Rice", category: "Grains", price: 50, stock: 500 },
    { id: 2, name: "Jute", category: "Fibers", price: 100, stock: 200 },
    { id: 3, name: "Fish Feed", category: "Animal Feed", price: 200, stock: 150 },
    { id: 4, name: "Poultry Feed", category: "Animal Feed", price: 150, stock: 300 },
    { id: 5, name: "Potato", category: "Vegetables", price: 30, stock: 600 },
    { id: 6, name: "Onion", category: "Vegetables", price: 40, stock: 400 },
    { id: 7, name: "Milk", category: "Dairy", price: 70, stock: 250 },
    { id: 8, name: "Egg", category: "Dairy", price: 10, stock: 1000 },
    { id: 9, name: "Wheat", category: "Grains", price: 60, stock: 350 },
    { id: 10, name: "Mustard Seed", category: "Oilseeds", price: 120, stock: 180 },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter products based on search term across all columns
  const filteredProducts = productTableData.filter((product) =>
    Object.values(product).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-3xl font-bold text-black mb-2 text-center">
        Transaction Overview
      </h1>

      <div className="flex flex-row justify-between">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
          }}
        >
          {/* Circular Chart */}

          <div
            style={{
              width: "200px",
              height: "200px",
              position: "relative",
              borderRadius: "50%",
              background: `conic-gradient(
              #4caf50 ${buyerPercentage * 3.6}deg,
              #ff9800 ${buyerPercentage * 3.6}deg 360deg
            )`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <p className="text-lg font-bold">৳{totalTransaction}</p>
              <p className="text-sm text-gray-600">Total Transaction</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-row gap-10">
            <div style={{ width: "2px", height: "120px", backgroundColor: "#4caf50" }}> </div>
            <div style={{ marginBottom: "20px" }}>
              <h2
                style={{
                  color: "#4caf50",
                  fontSize: "24px",
                  marginBottom: "10px",
                }}
              >
                Buyer
              </h2>
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                {buyerPercentage}%
              </p>
              <p style={{ fontSize: "16px", color: "#555" }}>
                {buyerCount} buyers | {buyerProducts} products
              </p>
            </div>
            <div style={{ width: "2px", height: "120px", backgroundColor: "#ff9800" }}> </div>

            <div>
              <h2
                style={{
                  color: "#ff9800",
                  fontSize: "24px",
                  marginBottom: "10px",
                }}
              >
                Seller
              </h2>
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                {sellerPercentage}%
              </p>
              <p style={{ fontSize: "16px", color: "#555" }}>
                {sellerCount} sellers | {sellerProducts} products
              </p>
            </div>
          </div>
        </div>
        {/* Search functionality */}
        <div style={{ marginTop: "30px", marginBottom: "20px", textAlign: "center" }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{
              padding: "10px",
              width: "300px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </div>
      </div>
      {/* Product Table */}
      <div style={{ marginTop: "50px" }}>
        <h2 className="text-xl font-bold text-center mb-5">Product Details</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  padding: "10px",
                  border: "1px solid #ddd",
                }}
              >
                ID
              </th>
              <th
                style={{
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  padding: "10px",
                  border: "1px solid #ddd",
                }}
              >
                Product Name
              </th>
              <th
                style={{
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  padding: "10px",
                  border: "1px solid #ddd",
                }}
              >
                Category
              </th>
              <th
                style={{
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  padding: "10px",
                  border: "1px solid #ddd",
                }}
              >
                Price (৳)
              </th>
              <th
                style={{
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  padding: "10px",
                  border: "1px solid #ddd",
                }}
              >
                Stock
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  {product.id}
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                  }}
                >
                  {product.name}
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  {product.category}
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                  }}
                >
                  {product.price}
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  {product.stock}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
