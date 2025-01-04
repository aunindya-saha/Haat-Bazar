import React from "react";
import banner from "../../images/admin/header.jpg";
import logo from "../../images/haatbazar-logo.png";
import user from "../../images/users/man.png";

const Header = () => {
  return (
    <div className="relative h-[20vh] w-full flex items-center justify-center overflow-hidden text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          background: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Logo at Top-Left */}
      <div className="absolute top-4 left-4">
        <img src={logo} alt="HaatBazar Logo" className="h-40" />
      </div>

      {/* User Image at Top-Right */}
      <div className="absolute top-14 right-10 flex items-center space-x-2">
        <img
          src={user}
          alt="User"
          className="w-14 h-14 rounded-full border-2 border-white mb-1"
        />
        <div>
          <p className="text-xl font-semibold mb-1 mt-2">এডমিন</p>
          <p className="text-lg text-gray-300">bishopehazz223@gmail.com</p>
        </div>
      </div>

      {/* Title in Center */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold">অ্যাডমিন কর্নার</h1>
      </div>
    </div>
  );
};

export default Header;
