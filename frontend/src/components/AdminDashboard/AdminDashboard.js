import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import DashboardContent from "./DashboardContent";
import Overview from "./Overview";

const AdminDashboard = () => {
  return (
    
    <div className="flex">
      <div></div>
      {/* Sidebar */}
      <div className="w-1/6 p-4 min-h-screen bg-gray-800 text-2xl">
        <ul className="menu">
          <li>
            <Link
              className="text-white mt-3 font-bold hover:text-black"
              to="/adminDashboard/overview"
            >
              <span className="flex gap-4">Overview</span>
            </Link>
          </li>
          <hr />
          <li>
            <Link
              className="text-white mt-3 font-bold hover:text-black"
              to="/adminDashboard/moneyTransaction"
            >
              <span className="flex gap-4">Money Transaction</span>
            </Link>
          </li>
          <hr />
          <li>
            <Link
              className="text-white mt-3 font-bold hover:text-black"
              to="/adminDashboard/products"
            >
              <span className="flex gap-4">Products</span>
            </Link>
          </li>
          <hr />
          <li>
            <Link
              className="text-white mt-3 font-bold hover:text-black"
              to="/adminDashboard/sellers"
            >
              <span className="flex gap-4">Sellers</span>
            </Link>
          </li>
          <hr />
          <li>
            <Link
              className="text-white mt-3 font-bold hover:text-black"
              to="/adminDashboard/complaints"
            >
              <span className="flex gap-4">Complaints</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Content Section */}
      <div className="w-5/6 p-4 ">
        <div className="mt-8">
          
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
