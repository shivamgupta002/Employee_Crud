import React ,{useState}from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active,setActive]=useState("home")
  const getActivePath=(event)=>{
    if(event===active){
      return "text-green-500"
    }
}  
  return (
    <>
      <header className="flex justify-between items-center bg-gray-100 px-16 h-30 py-4 shadow-lg">
        <div className="text-4xl text-green-300 font-medium">Shipway</div>
        <nav>
          <ul className="flex">
            <li onnClick={()=>{setActive("home")}}>
              <Link
                to="/"
                className={`px-3 hover:text-green-500 text-gray-500 text-lg transition-all duration-300 ease-in-out font-normal ${getActivePath("home")}`}
              >
                Home
              </Link>
            </li>
            <li onClick={()=>{setActive("employees")}}>
              <Link
                to="/employees"
                className={`px-3 hover:text-green-500 text-gray-500 text-lg transition-all duration-300 ease-in-out font-normal ${getActivePath("employees")}`}
              >
                Employees
              </Link>
            </li>
            <li onClick={()=>{setActive("service")}}>
              <Link
                to="/service"
                className={`px-3 hover:text-green-500 text-gray-500 text-lg transition-all duration-300 ease-in-out font-normal ${getActivePath("services")}`}
              >
                Services
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
