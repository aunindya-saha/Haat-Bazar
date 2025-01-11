import React from "react";
import logo from "../../images/haatbazar-logo.png";

const Footer = () => {
  return (
    <footer className="h-38 footer bg-black text-[#FFFFFF99] font-bold p-10 grid lg:grid-cols-3">
      {/* Logo Section */}
      <div className="">
        <img src={logo} alt="HaatBazar Logo" className=" h-40" />
      </div>

      {/* About Section */}
      <div className=" lg:col-span-1 gap-10 lg:ml-[-150px]">
        <h3 className="text-2xl font-extrabold text-white mb-6">
          আরও দেখুন
        </h3>
        <p className="my-4 lg:w-[500px] text-justify ">
          হাটবাজার বাংলাদেশের কৃষকদের জন্য একটি গুরুত্বপূর্ণ প্ল্যাটফর্ম, যা তাদের পণ্য সরাসরি গ্রাহকের কাছে পৌঁছানোর মাধ্যমে আয়ের সুযোগ বৃদ্ধি করে। 
          এই ই-কমার্স ওয়েবসাইট কৃষির বাজারজাতকরণে স্বচ্ছতা এবং দ্রুততা আনে, যা দেশের কৃষি খাতকে আরও শক্তিশালী করে।
        </p>
        <div className="flex items-center mb-2">
          <i className="fa-regular fa-message text-blue-800 mr-2"></i>
          <span>hockeys@support.com</span>
        </div>
        <div className="flex items-center">
          <i className="fa-solid fa-phone text-blue-800 mr-2"></i>
          <span>(+62) 123-321-543</span>
        </div>
      </div>

      {/* Links Section */}
      <div className="text-white ml-[50px]">
        <h3 className="text-xl mb-4 ml-[30px]">আমাদের সম্পর্কে</h3>
        <ul className="space-y-2 text-left">
          <li><a href="#" className="link link-hover">আমাদের সেবা</a></li>
          <li><a href="#" className="link link-hover">আমাদের পরিকল্পনা</a></li>
          <li><a href="#" className="link link-hover">আমাদের আড়তদার</a></li>
          <li><a href="#" className="link link-hover">নতুন খবর</a></li>
          <li><a href="#" className="link link-hover">যোগাযোগ</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
