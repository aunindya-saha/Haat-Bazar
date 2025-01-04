import React from "react";
import logo from "../../images/haatbazar-logo.png";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white text-xl p-10 flex justify-between">
      <div>
      <img src={logo} alt="Logo" className="w-60 h-auto" /> </div>
      <div className="text-base flex flex-col md:flex-row gap-10 mr-28 ">
      <nav>
        <h6 className="footer-title">Services</h6>
        <div className="flex flex-wrap gap-5"> 
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
        </div>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <div className="flex flex-wrap gap-5"> 
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
        </div>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <div className="flex flex-wrap gap-5"> 
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
        </div>
      </nav>
      </div>
    </footer>
  );
};

export default Footer;
