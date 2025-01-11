import React from "react";
import { Link, Outlet } from "react-router-dom";
import banner from "../../images/Buyer/banner4.jpg";
import logo from "../../images/haatbazar-logo.png";

const BuyerMenu = () => {
  return (
    <div className="h-1/6">
      <header
        className="bg-green-700 text-white shadow-lg"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px", // Adjusted height to cover the full header section
        }}
      >
        <div className="absolute h-64 inset-0 bg-black opacity-50"></div>

        <div className="container mx-auto relative px-6 py-4">
          {/* Logo */}
          <div className="absolute top-4 left-4">
            <img src={logo} alt="HaatBazar Logo" className="h-36" />
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-10 absolute top-24 left-1/2 transform -translate-x-1/2 text-xl font-bold">
            <Link to="/buyerMenu/buyerHomePageBody" className="text-white hover:text-green-300">
              হোম
            </Link>
            <Link to="/buyerMenu/buyerCart" className="text-white hover:text-green-300">
              কার্ট
            </Link>
            <Link to="/buyerMenu/buyerComplain" className="text-white hover:text-green-300">
              অভিযোগ
            </Link>
            <Link to="/buyerMenu/buyerOrderHistory" className="text-white hover:text-green-300">
              পূর্ববর্তী ক্রয়
            </Link>
            <Link to="/buyerMenu/buyerFraudList" className="text-white hover:text-green-300">
              প্রতারক তালিকা
            </Link>
          </div>

          {/* Cart and Logout Section */}
          <div className="flex items-center space-x-4 absolute top-24 right-6">
            <Link to="/buyerMenu/buyerCart">
              <button className="bg-green-600 hover:bg-green-800 px-4 py-2 rounded-md text-sm">
                Cart
              </button>
            </Link>
            <Link to="/buyer/logout">
              <button className="bg-red-600 hover:bg-red-800 px-4 py-2 rounded-md text-sm">
                Logout
              </button>
            </Link>
          </div>
        </div>
      </header>
      
      <div className="h-5/6 p-4">
        <div className="mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BuyerMenu;
