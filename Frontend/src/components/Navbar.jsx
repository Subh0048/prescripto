import { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4 border-b border-b-gray-400">
      <img onClick={() => { navigate('/') }} className="w-44 cursor-pointer" src={assets.logo} alt="" />
      <ul className=" hidden md:flex items-start  gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/Doctors">
          <li className="py-1">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/About">
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/Contact">
          <li className="py-1">Contacts</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex gap-2 item-center cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />

            <div className="absolute top-0 right-0 pt-14 font-medium text-gray-600 z-20 hidden  group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={() => (navigate('/My-profile'))} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={() => (navigate('/My-appointment'))} className="hover:text-black cursor-pointer">My Appointments</p>
                <p onClick={() => (setToken(false))} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/Login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block "
          >
            create account
          </button>
        )}
        <img onClick={() => setshowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />
        <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden top-0 right-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className="flex item-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img className="w-7" onClick={() => setshowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className="flex flex-col items-center gap-2 text-lg font-medium ">
            <NavLink to='/' onClick={() => setshowMenu(false)}><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
            <NavLink to='/about' onClick={() => setshowMenu(false)}><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
            <NavLink to='contact' onClick={() => setshowMenu(false)}><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
            <NavLink to='/doctors' onClick={() => setshowMenu(false)}><p className='px-4 py-2 rounded inline-block'>All doctors</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
