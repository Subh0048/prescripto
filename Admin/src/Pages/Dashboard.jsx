import {
  CalendarDays,
  CircleX,
  LayoutDashboard,
  SquarePlus,
  Users,
} from "lucide-react";
import { assets } from "../assets/assets";
import { useState } from "react";

function Dashboard() {
  const cards = [
    { icon: assets.General_physician, number: 14, label: "Doctor" },
    { icon: assets.General_physician, number: 14, label: "Appointments" },
    { icon: assets.General_physician, number: 14, label: "Patients" },
  ];

  let Appointments1 = [
    {
      icon: assets.profile_pic,
      DoctortName: " Dr.Richard james1",
      date: "24th july,2025",
      id: 1,
    },
    {
      icon: assets.profile_pic,
      DoctortName: " Dr.Richard james2",
      date: "24th july,2025",
      id: 2,
    },
    {
      icon: assets.profile_pic,
      DoctortName: " Dr.Richard james3",
      date: "24th july,2025",
      id: 3,
    },
    {
      icon: assets.profile_pic,
      DoctortName: " Dr.Richard james4",
      date: "24th july,2025",
      id: 4,
    },
  ];

  const [Appointment, setAppointment] = useState(Appointments1);

  const Removeappointment = (id) => {
    setAppointment((prev) =>
      prev.filter((appointment) => appointment.id !== id)
    );
  };

  return (
    <div className="flex md:h-[100vh]">
      <div className="flex flex-col w-full h-full gap-2 bg-gray-200 ">
        <div className="flex flex-col gap-6 m-5 md:flex-row">
          {cards.map((item, idx) => (
            <div
              key={idx}
              className="flex w-full gap-4 p-4 bg-white rounded-sm md:w-[20vw] lg:w-[15vw] "
            >
              <img className="w-10" src={item.icon} alt="" />
              <div className="w-full text-gray-500">
                <p className="font-semibold text-black">{item.number}</p>
                <p className="text-xs">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="m-5 bg-white rounded lg:w-[50%] ">
          <p className="p-4 font-semibold text-gray-800 border-b border-b-gray-400">
            Latest Appointment
          </p>

          <div className="flex flex-col items-start justify-between gap-4 p-4">
            {Appointment.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between w-full"
              >
                <div className="flex gap-4">
                  <img
                    className="rounded-full w-9 md:w-10"
                    src={appointment.icon}
                    alt="pic"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-xl">{appointment?.DoctortName}</p>
                    <p className="text-xs text-gray-500 ">
                      {appointment?.date}
                    </p>
                  </div>
                </div>

                <CircleX
                  color="rgb(241, 163, 163)"
                  className="cursor-pointer "
                  onClick={() => Removeappointment(appointment.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
