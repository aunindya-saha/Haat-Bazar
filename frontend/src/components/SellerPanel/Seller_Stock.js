import React, { useState } from 'react';

const SellerStock = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const products = [
    { id: 'P - 1211', name: 'আম', quantity: 30, unitPrice: 10 },
    { id: 'P - 1345', name: 'জাম', quantity: 20, unitPrice: 20 },
    { id: 'P - 2354', name: 'কলা', quantity: 40, unitPrice: 10 },
    { id: 'P - 2762', name: 'লেবু', quantity: 70, unitPrice: 5 },
  ];

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'ASC') return a.unitPrice - b.unitPrice;
      if (sortOrder === 'DESC') return b.unitPrice - a.unitPrice;
      return 0;
    });

  return (
    <div className="container mx-auto mt-10 lg:mt-[100px]">
      <div className="border-t-2 border-b-2 border-gray-300 border-dashed p-6 lg:p-9 text-center">
        <h2 className="text-xl lg:text-4xl font-extrabold">আপনার পণ্যের স্টক</h2>
        <br />
        <form className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
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
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
        <br />
        <form className="max-w-sm mx-auto">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">পণ্যমূল্য ক্রমানুসারে সাজান</option>
            <option value="ASC">পণ্যমূল্যের ঊর্ধ্ব ক্রমানুসারে</option>
            <option value="DESC">পণ্যমূল্যের অধঃ  ক্রমানুসারে</option>
          </select>
        </form>
        <br />

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
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <th>{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.quantity * product.unitPrice}</td>
                  <td>
                    <button className="btn btn-active">বিস্তারিত</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SellerStock;
