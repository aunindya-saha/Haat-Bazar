import React, { useState } from 'react';

const SellerStock = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const products = [
    { id: 'P - 1211', name: 'Mango', quantity: 30, unitPrice: 10 },
    { id: 'P - 1345', name: 'Rice', quantity: 20, unitPrice: 20 },
    { id: 'P - 2354', name: 'Litchi', quantity: 40, unitPrice: 10 },
    { id: 'P - 2762', name: 'Cabbage', quantity: 70, unitPrice: 5 },
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
      <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Your Product Stock!</h2>
        <br />
        <form className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative ">
            
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Products"
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
            <option value="">Sort the Products</option>
            <option value="ASC">Descending Order</option>
            <option value="DESC">Ascending Order</option>
          </select>
        </form>
        <br />

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Producr ID</th>
                <th>Product Name</th>
                <th>Quantity (kg)</th>
                <th>Unit Price(৳)</th>
                <th>Total Price(৳)</th>
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
