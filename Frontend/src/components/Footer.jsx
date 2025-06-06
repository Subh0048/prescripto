import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10 ">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full  md:2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-5">COMPANY</h2>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-medium mb-5">GET IN TOUCH</h2>
          <ul className="flex flex-col gap-2  text-gray-600">
            <li>+91 6789765456</li>
            <li>subhamdev@gmail.com</li>
          </ul>
        </div>
      </div>

      {/*-------copy right------- */}
      <div >
        <hr />
        <p className="text-center py-5 text-sm">Copyright © 2025 Prescripto - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
