import React from "react";
import { Link } from "react-router-dom";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer style={{ background: `url(${footer})`, backgroundSize:"cover", backgroundPosition:"center" }} className="footer p-20 justify-around">
      <div className="text-gray-500 font-semibold">
        <span className="footer-title">Services</span>
        <Link to="/" className="link link-hover">
          Emergency Checkup
        </Link>
        <Link to="/" className="link link-hover">
          Monthly Checkup
        </Link>
        <Link to="/" className="link link-hover">
          Weekly Checkup
        </Link>
        <Link to="/" className="link link-hover">
          Deep Checkup
        </Link>
      </div>
      <div className="text-gray-500 font-semibold">
        <span className="footer-title">Oral Health</span>
        <Link href="/" className="link link-hover">
          Fluoride Treatment{" "}
        </Link>
        <Link to="/" className="link link-hover">
          Cavity Filling
        </Link>
        <Link to="/" className="link link-hover">
          Teath Whitening
        </Link>
      </div>
      <div className="text-gray-500 font-semibold">
        <span className="footer-title">Our Address</span>
        <Link to="/" className="link link-hover">
          Rangpur, Dhaka, Bangladesh
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
