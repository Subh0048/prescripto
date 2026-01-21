import Navbar from "./component/Navbar";
import Dashboard from "./Pages/Dashboard";
import { Routes, Route,Outlet } from "react-router-dom";
import Sidebar from "./component/sidebar";
import Allapointments from "./Pages/Allapointments";
import Adddoctor from "./Pages/Adddoctor";
import Alldoctor from "./Pages/Alldoctor";
import AdminLogin from "./Pages/AdminLogin";
import ProtectedRoute from "./utils/ProtectedRoute";


function App() {

  return (
     <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route element={<ProtectedRoute/> }>
      <Route element={<AdminLayout/>}>
        <Route path="/appointments" element={<Allapointments />} />
        <Route path="/adddoctor" element={<Adddoctor />} />
        <Route path="/doctorlist" element={<Alldoctor />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route> 
      </Route>
    </Routes>
  );
}

export default App;


const AdminLayout = () => {
  return (
    <div className="mx-4 sm:mx-[5%]">
      <Navbar />
      <div className="flex">
        <Sidebar className="w-64" />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
