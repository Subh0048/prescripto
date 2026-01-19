import Navbar from "./component/Navbar";
import Dashboard from "./Pages/Dashboard";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./component/sidebar";
import Allapointments from "./Pages/Allapointments";
import Adddoctor from "./Pages/Adddoctor";
import Alldoctor from "./Pages/Alldoctor";
import AdminLogin from "./Pages/AdminLogin";

function App() {
  let navigate = useNavigate()
  let admin =false

 
 
  return (
    <div className="mx-4 sm:mx-[5%]">
      {
        admin ? (
          <>
           <Navbar />
      <div className="flex">
        <Sidebar className="w-64" />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/appointments" element={<Allapointments />} />
            <Route path="/adddoctor" element={<Adddoctor />} />
            <Route path="/doctorlist" element={<Alldoctor />} />
          </Routes>
        </div>
      </div>   
      </>  
    ) : (   <Routes>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="*" element={<navigate to="/admin" />} />
        </Routes>)
      }

    </div>
  );
}

export default App;
