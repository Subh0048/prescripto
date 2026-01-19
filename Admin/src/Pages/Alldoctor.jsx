import React, { useState } from "react";
import { doctors } from "../../../Frontend/src/assets/assets";

function Alldoctor() {
  const [doctor, setDoctor] = useState(doctors);
  return (
    <div className="h-full p-5 bg-gray-200">
      <p className="p-5 text-xl font-semibold text-gray-800 ">All Doctors</p>
      <div className="grid w-full gap-4 md:grid-cols-4 gap-x-6">
        {doctor.map((Doctor, index) => (
          <div
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <img className="bg-blue-50 " src={Doctor.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full "></p>
                <p>Available</p>
              </div>
              <p className="text-lg font-medium text-gray-900 ">
                {Doctor.name}
              </p>
              <p className="text-sm text-gray-600 ">{Doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Alldoctor;
