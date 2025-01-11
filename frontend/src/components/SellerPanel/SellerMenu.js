import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../../images/haatbazar-logo.png";

const SellerMenu = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-yellow-500 no-underline"
      : "text-white hover:text-green-300 no-underline";
  };

  return (
    <div className="h-1/6">
      <header className="bg-[#365314] text-white h-[200px]">
        <div className="container mx-auto relative px-6 py-4">
          {/* Logo */}
          <div className="absolute top-4 left-4">
            <img src={logo} alt="HaatBazar Logo" className="h-36" />
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-10 absolute top-24 left-1/2 transform -translate-x-1/2 text-l font-bold">
            <Link to="/sellerMenu/sellerHome" className={getLinkClass("/sellerMenu/sellerHome")}>
              হোম
            </Link>
            <Link to="/sellerMenu/sellerComplain" className={getLinkClass("/sellerMenu/sellerComplain")}>
              অভিযোগ
            </Link>
            <Link to="/sellerMenu/sellerSell" className={getLinkClass("/sellerMenu/sellerSell")}>
              পণ্য বিক্রি
            </Link>
            <Link to="/sellerMenu/sellerSoldList" className={getLinkClass("/sellerMenu/sellerSoldList")}>
              বিক্রিত পণ্য তালিকা
            </Link>
            <Link to="/sellerMenu/sellerStock" className={getLinkClass("/sellerMenu/sellerStock")}>
              স্টক তালিকা
            </Link>
          </div>

          {/* Logout Section */}
          <div className="flex items-center space-x-4 absolute top-24 right-6">
            <Link to="/seller/logout">
              <button className="bg-[#a5f3fc] hover:bg-red-800 px-4 py-2 rounded-md text-sm">
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

export default SellerMenu;
