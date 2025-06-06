import  { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 text-gray-900 md:mx-10 ">
        <h1 className="text-3xl font-medium ">Top Doctors to Book </h1>
        <p className="sm:w-1.5/3 text-sm text-center">
          simply browse through our extensive list of trusted doctors{" "}
        </p>

        <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 ">
          {doctors.slice(0, 10).map((Doctor, index) => (
            <div
              onClick={() => {navigate(`/Appointment/${Doctor._id}`);scrollTo(0,0)}}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-blue-50 " src={Doctor.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="h-2 w-2 bg-green-500 rounded-full "></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium ">
                  {Doctor.name}
                </p>
                <p className="text-gray-600 text-sm ">{Doctor.speciality}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={()=>{navigate('/Doctors'), scrollTo(0,0)}} className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-8">
          more
        </button>
      </div>
    </>
  );
};

export default TopDoctors;
