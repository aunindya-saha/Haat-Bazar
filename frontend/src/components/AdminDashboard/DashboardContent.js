import React from 'react';

const DashboardContent = () => {
    return (
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Sellers */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-700">Sellers</h2>
            <p className="text-4xl font-semibold text-blue-500 mt-2">31</p>
          </div>

          {/* Card 2: Buyers */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-700">Buyers</h2>
            <p className="text-4xl font-semibold text-green-500 mt-2">700</p>
          </div>

          {/* Card 3: Products */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-700">Products</h2>
            <p className="text-4xl font-semibold text-yellow-500 mt-2">967</p>
          </div>

          {/* Card 4: Transactions */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-700">Transactions</h2>
            <p className="text-4xl font-semibold text-red-500 mt-2">
              ৳5,43,986
            </p>
          </div>
        </div>
      </div>
    );
};

export default DashboardContent;