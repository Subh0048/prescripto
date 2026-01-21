
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {

  const navigate = useNavigate()

  const onClickHandler = ()=>{
    localStorage.removeItem("admintoken")
    navigate("/")
  }
  
  return (
    <div className="flex justify-between py-4 border-b item-center border-b-gray-400 ">
      <img className="cursor-pointer w-30" src={assets.logo} alt="logo" />
      <button onClick={()=>{onClickHandler()}} className="bg-[#5f6FFF] px-7 py-2 rounded-full font-light hidden cursor-pointer md:block">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
