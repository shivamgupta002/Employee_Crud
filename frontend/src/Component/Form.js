import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const New = () => {
  const history = useNavigate();

  const [employee_id, setEmployee_id] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [doj, setDoj] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState([
    { id: 1, value: "Shipway express", isChecked: false },
    { id: 2, value: "Shipway One", isChecked: false },
    { id: 3, value: "Convert way", isChecked: false },
  ]);
  const [newDepartment, setNewDepartment] = useState("");

  const handleCheckboxChange = (event) => {
    const { name } = event.target;

    const updatedDepartment = department?.map((checkbox) =>
      checkbox.value === name
        ? { ...checkbox, isChecked: !checkbox.isChecked }
        : checkbox
    );

    const checkedDepartments = updatedDepartment.filter(
      (item) => item.isChecked
    );
    const checkedValues = checkedDepartments?.map((item) => item.value);
    const checkedValuesString = checkedValues.join(", ");

    setDepartment(updatedDepartment);

    setNewDepartment(checkedValuesString);
  };

  const submit = async (e) => {
    e.preventDefault();
    console.log(
      employee_id,
      name,
      email,
      phone,
      doj,
      gender,
      newDepartment,
      address,
      designation
    );
    try {
      await axios
        .post("http://localhost:5000/employees", {
          employee_id,
          name,
          email,
          phone,
          doj,
          gender,
          newDepartment,
          address,
          designation,
        })
        .then((res) => {
          history("/employees");
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="block mb-5 flex-wrap">
        <div className="grid place-content-between justify-center bg-[url('https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80')] bg-cover bg-scroll w-screen h-screen bg-no-repeat">
          <h2 className="text-[#3AA6B9] mt-7 text-3xl hover:text-[#1F6E8C] cursor-pointer transition-all duration-300 ease-in-out self-start text-center">
            Add Your Details
          </h2>
          <h2 className="m-10 bottom-2 text-[#164B60] cursor-pointer text-2xl p-5 opacity-100 animate-bounce">
            Lean More <span className=" text-gray-200 text-3xl">&#11167;</span>
          </h2>
        </div>
        <form
          action="post"
          className="mx-auto sm:mt-6 lg:mt-6 max-w-xl "
          onSubmit={submit}
        >
          <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
            {/* -----------  Employee id ---------- */}
            <div data-aos="fade-right" data-aos-duration="1000">
              <label
                htmlFor="employeeId"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Employee Id
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="employeeId"
                  id="employeeId"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Employee id"
                  onChange={(e) => setEmployee_id(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* -----------  Name ---------- */}
            <div data-aos="fade-left" data-aos-duration="1000">
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* -----------  Email ---------- */}
            <div data-aos="fade-right" data-aos-duration="1000">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* -----------  Phone ---------- */}
            <div data-aos="fade-left" data-aos-duration="1000">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  minLength={10}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Phone number"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* -----------  Date of Joining ---------- */}
            <div data-aos="fade-right" data-aos-duration="1000">
              <label
                htmlFor="doj"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Date of Joining
              </label>
              <div className="mt-2.5">
                <input
                  type="date"
                  name="doj"
                  id="doj"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setDoj(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* -----------  Gender ---------- */}
            <div data-aos="fade-left" data-aos-duration="1000">
              <label
                htmlFor="gender"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Gender
              </label>
              <div className="flex">
                <div className="mt-5 me-5 ">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    className="me-2"
                    onChange={(e) => setGender(e.target.value)}
                    required
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="mt-5">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    className="me-2"
                    onChange={(e) => setGender(e.target.value)}
                    required
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>

            {/* -----------  Department ---------- */}
            <div data-aos="fade-right" data-aos-duration="1000">
              <label
                htmlFor="department"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Department
              </label>
              {department.map((department) => (
                <div key={department.id}>
                  <input
                    type="checkbox"
                    name={department.value}
                    checked={department.isChecked}
                    onChange={handleCheckboxChange}
                    id={department.value}
                    className="me-2"
                  />
                  <label htmlFor={department.value}>{department.value}</label>
                </div>
              ))}
            </div>
            {/* -----------  Address ---------- */}
            <div data-aos="fade-left" data-aos-duration="1000">
              <label
                htmlFor="address"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2.5">
                <textarea
                  id="address"
                  className="h-[5.5rem] w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Address"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
          </div>
          {/* -----------  Destination ---------- */}
          <div
            className="mt-2.5"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <label
              htmlFor="designation"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Destination
            </label>
            <div className="flex flex-wrap">
              <div className="mt-2.5 me-5 ">
                <input
                  type="radio"
                  name="designation"
                  id="vp"
                  value="Vice president"
                  className="me-2"
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                />
                <label htmlFor="vp">Vice president</label>
              </div>
              <div className="mt-2 me-5">
                <input
                  type="radio"
                  name="designation"
                  id="avp"
                  className="me-2"
                  value="Assistant vice president"
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                />
                <label htmlFor="avp">Assistant Vice president</label>
              </div>
              <div className="mt-2 me-5">
                <input
                  type="radio"
                  name="designation"
                  id="executive"
                  className="me-2"
                  value="Executive"
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                />
                <label htmlFor="executive">Executive</label>
              </div>
              <div className="mt-2 me-5">
                <input
                  type="radio"
                  name="designation"
                  id="tl"
                  className="me-2"
                  value="Team Leader"
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                />
                <label htmlFor="tl">Team Leader</label>
              </div>
              <div className="mt-2 me-5">
                <input
                  type="radio"
                  name="designation"
                  id="manager"
                  className="me-2"
                  value="Manager"
                  onChange={(e) => setDesignation(e.target.value)}
                  required
                />
                <label htmlFor="manager">Manager</label>
              </div>
            </div>
          </div>
          {/* -----------  Submit ---------- */}
          <div className="flex justify-center content-center mt-4">
            <button
              type="submit"
              className="rounded-2xl bg-cyan-500 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:scale-105 hover:shadow-2xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default New;
