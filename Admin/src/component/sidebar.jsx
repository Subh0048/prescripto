import React from "react";
import {
  CalendarDays,
  CircleX,
  LayoutDashboard,
  SquarePlus,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 text-gray-500 cursor-pointer border-r-gray-400 md:h-[100vh] w-30 ">
      <div className="flex flex-col gap-4 mr-2">
        <p className=" flex gap-1 items-center justify-start text-sm mt-2  py-1 hover:bg-gray-100 hover:rounded-[3px] hover:border border-gray-200    ">
          <LayoutDashboard size={20} />{" "}
          <p
            className="hidden md:block"
            onClick={() => {
              navigate("/");
            }}
          >
            Dashboard
          </p>
        </p>

        <p className="flex gap-1 items-center justify-start text-sm py-1 hover:bg-gray-100 hover:rounded-[3px] hover:border border-gray-200    ">
          <CalendarDays size={20} />
          <p
            className="hidden md:block "
            onClick={() => {
              navigate("/appointments");
            }}
          >
            Appointments
          </p>
        </p>
        <p className="flex gap-1 items-center justify-start text-sm py-1 hover:bg-gray-100 hover:rounded-[3px] hover:border border-gray-200     ">
          <SquarePlus size={20} />{" "}
          <p
            className="hidden md:block"
            onClick={() => {
              navigate("/adddoctor");
            }}
          >
            Add doctor
          </p>
        </p>
        <p className="flex gap-1 items-center justify-start text-sm py-1 hover:bg-gray-100 hover:rounded-[3px] hover:border border-gray-200     ">
          <Users size={20} />
          <p
            className="hidden md:block"
            onClick={() => {
              navigate("/doctorlist");
            }}
          >
            Doctors List
          </p>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
