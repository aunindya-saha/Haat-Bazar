import React, { useState, useEffect } from "react";

const SellerSoldList = () => {
  const [products, setProducts] = useState([
    { id: "P - 1211", name: "আম", quantity: 30, unitPrice: 10, totalPrice: 300 },
    { id: "P - 1345", name: "জাম", quantity: 20, unitPrice: 20, totalPrice: 400 },
    { id: "P - 2354", name: "কলা", quantity: 40, unitPrice: 10, totalPrice: 400 },
    { id: "P - 2762", name: "লেবু", quantity: 70, unitPrice: 5, totalPrice: 350 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    let filteredProducts = [...products];

    // Apply sorting
    if (sortOrder === "ASC") {
      filteredProducts.sort((a, b) => a.unitPrice - b.unitPrice);
    } else if (sortOrder === "DESC") {
      filteredProducts.sort((a, b) => b.unitPrice - a.unitPrice);
    }

    // Apply search filter
    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.includes(searchTerm)
      );
    }

    setProducts(filteredProducts);
  }, [searchTerm, sortOrder]);

  return (
    <div className="container mx-auto mt-10 lg:mt-[100px]">
      <div className="border-t-2 border-b-2 border-gray-300 border-dashed p-6 lg:p-9 text-center">
        <h2 className="text-xl lg:text-4xl font-extrabold">আপনার বিক্রীত পণ্যের তালিকা</h2>
        <br />

        {/* Search input */}
        <form className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="hidden">
              Search
            </button>
          </div>
        </form>
        <br />

        {/* Sort dropdown */}
        <form className="max-w-sm mx-auto">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">পণ্যমূল্য ক্রমানুসারে সাজান</option>
            <option value="ASC">পণ্যমূল্যের ঊর্ধ্ব ক্রমানুসারে</option>
            <option value="DESC">পণ্যমূল্যের অধঃ ক্রমানুসারে</option>
          </select>
        </form>
        <br />

        {/* Product table */}
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>পণ্য আইডি</th>
                <th>পণ্যের নাম</th>
                <th>পণ্যের পরিমাণ (kg)</th>
                <th>একক মূল্য(৳)</th>
                <th>মূল্য(৳)</th>
                <th>বিস্তারিত</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <th>{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.totalPrice}</td>
                  <td>
                    <button className="btn btn-active">বিস্তারিত</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />

        {/* PDF button */}
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-warning">
          বিক্রি সম্পর্কিত PDF
        </button>
      </div>
    </div>
  );
};

export default SellerSoldList;
