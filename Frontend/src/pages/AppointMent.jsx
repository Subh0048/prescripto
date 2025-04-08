import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContextProvider";
import { assets } from "../assets/assets";

const AppointMent = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo, setdocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState();

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setdocInfo(docInfo);
  };




  const getAvailableSlots = async () => {
    setDocSlots([])

    // getting current dates
    let today = new Date()


    for (let i = 0; i < 7; i++) {


      //getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      //setting endtime with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlot = []


      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hours: '2-digit', minutes: '2-digits' })

        //add slot to arrey 
        timeSlot.push({
          dateTime: new Date(currentDate),
          time: formattedTime
        })

        // increment time by 30 minutes 
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }



      setDocSlots(prev => ([...prev, timeSlot]))
    }



  };





  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);
  useEffect(() => {
    getAvailableSlots();

  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots)
  }, [docSlots])

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
        {/*-------booking slots----------*/}
        <div className="sm:ml-72 pl-4 mt-4 font-medium text-gray-700">
          <p>Booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {
              docSlots.length && docSlots.map((item, index) => (
                <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-600'}`} key={index} >
                  <p>{item[0] && daysOfWeek[item[0]?.dateTime?.getDay()]}</p>
                  <p>{item[0] && item[0]?.dateTime?.getDate()}</p>





                </div>







              ))

            }

          </div>

          <div className="flex flex-center gap-3 w-full overflow-x-scroll mt-4">
            {
              docSlots.length && docSlots[slotIndex].map((item, index) =>

              (
                <p onClick={() => setSlotTime(item?.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'} `}

                  key={index}>

                  {item.time.toLowerCase()}
                </p>)




              )
            }
          </div>
          <button className="bg-primary text-white rounded-full px-14 py-5 my-6 cursor-pointer">Book an AppointMent</button>





        </div>


      </div>
    )
  );
};

export default AppointMent;
