import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>{" "}
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            accusamus ipsum quam provident modi nostrum ipsam fugiat explicabo,
            est repudiandae pariatur eaque. Deserunt veniam aut quam
            necessitatibus suscipit veritatis cum temporibus maiores eum
            dignissimos doloremque, repellat dolor corrupti quasi
            exercitationem!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            eaque rerum ipsa repellat provident nemo praesentium magnam aut,
            nesciunt voluptatem id qui cupiditate natus nulla officia dolor
            labore quia similique enim sint reprehenderit repudiandae deserunt!
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            modi! Laudantium illum fugiat sit ipsum et doloremque porro,
            quibusdam praesentium modi rerum delectus, itaque atque!
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>WHY <span className="text-gray-700 font-semibold">CHOOSE US</span></p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Efficiency</b>
          <p>Streamlined appointment scheduling that fit into your busy lfestyle </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Convenience</b>
          <p>Access to a networkof trusted healthcare professionals in your area  </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
          <b>Personalization</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health  </p>
        </div>
      </div>
    </div>
  );
};

export default About;
