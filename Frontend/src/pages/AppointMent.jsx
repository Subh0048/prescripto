import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";
import { assets } from "../assets/assets";

const AppointMent = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const [docInfo, setdocInfo] = useState(null);
  const [availableDate, setavailabledate] = useState();
  const [time, settime] = useState();

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setdocInfo(docInfo);
  };

  const currentdate = new Date();
  const dates = [];

  
  const getAvailableSlots = async () => {
    const nextdates = new Date();
    for (let i = 0; i < 7; i++) {
      nextdates.setDate(nextdates.getDate() + i);
      dates.push(nextdates.toISOString().split("T")[0]);
    }
    


  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);
  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  return (
    docInfo && (
      <div>
        {/*----------docdatail----------------*/}
        <div className="flex flex-col gap-10 sm:flex-row gap-4 mt-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg  "
              src={docInfo?.image}
              alt="not"
            />
          </div>

          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white  sm:mx-0 sm:mt-0">
            {/*------docinfo----*/}

            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            {/*----doc about-------*/}
            <div>
              <p className="flex gap-1 items-center text-sm font-medium text-gray-900 mt-3 ">
                About <img src={assets.info_icon} alt="info icon" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1 ">
                {docInfo.about}
              </p>
            </div>

            <p className="text-gray-500 font-medium mt-4">
              Appointment fee :{" "}
              <span className="text-gray-600">
                {currencySymbol} {docInfo.fees}.
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default AppointMent;
