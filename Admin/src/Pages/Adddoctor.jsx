import React, { useId } from "react";
import { SquareUserRound } from "lucide-react";
import DoctorForm from "../component/DoctorForm";

function Adddoctor() {
  const docid = useId();
  console.log(docid);
  return (
    <div className="h-full bg-gray-200">
      <p className="p-5 text-xl font-semibold text-gray-800 ">Add Doctor</p>
      <div className="mx-5 bg-white border border-gray-300 rounded max-h-fit">
        <div className="p-5">
          <div className="flex items-center block gap-5">
            <label className="flex items-center justify-center w-20 h-20 text-gray-500 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
              <SquareUserRound size={25} />
              <input type="file" className="hidden" />
            </label>
            <p className="text-xl text-neutral-500">
              Upload doctor
              <br /> Picture{" "}
            </p>
          </div>

          <div>
            <DoctorForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adddoctor;
