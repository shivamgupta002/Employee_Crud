import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
// import Employee from "./Employee/Employee";
import { Route, Routes } from "react-router-dom";
import Employees from "./Employee/Employees";
import Services from "./Service";
import EmployeeDetails from "./Employee/EmployeeDetails";

const Controller = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/employees" element={<Employees
         />} />
        <Route path="/service" element={<Services
         />} />
        <Route path="/edit/:id" element={<EmployeeDetails
         />} />
      </Routes>
    </div>
  );
};

export default Controller;
