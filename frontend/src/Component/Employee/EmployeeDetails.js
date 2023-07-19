import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// #####################################################

const EmployeeDetails = () => {
  const defaultDepartment = [
    { id: 1, value: "Shipway express", isChecked: false },
    { id: 2, value: "Shipway One", isChecked: false },
    { id: 3, value: "Convert way", isChecked: false },
  ];
  const [inputs, setInputs] = useState({});
  const { id } = useParams();
  const history = useNavigate();
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState(defaultDepartment);
  // Shipway express,Shipway One,Convert way

  useEffect(() => {
    let stringArray = inputs.newDepartment;
    // console.log(inputs);
    if (stringArray !== undefined) {
      return () => {
        if (stringArray.includes("Shipway express")) {
          defaultDepartment[0].isChecked = true;
          setDepartment(defaultDepartment);
        }
        if (stringArray.includes("Shipway One")) {
          defaultDepartment[1].isChecked = true;
          setDepartment(defaultDepartment);
        }
        if (stringArray.includes("Convert way")) {
          defaultDepartment[2].isChecked = true;
          setDepartment(defaultDepartment);
        }
      };
    }
  },[inputs]);

  // console.log(inputs.newDepartment);

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/employees/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.employee));
    };
    fetchHandler();
  }, [id]);
  // console.log(id);
  //------------ update----------
  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/employees/${id}`, {
        employee_id: Number(inputs.employee_id),
        name: String(inputs.name),
        email: String(inputs.email),
        phone: Number(inputs.phone),
        doj: String(inputs.doj),
        gender: String(inputs.gender),
        newDepartment: String(inputs.newDepartment),
        address: String(inputs.address),
        designation: String(inputs.designation),
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/employees"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(inputs.designation);
  return (
    <>
      {/* Update Details */}
      {/* ##################################################### */}
      {inputs && (
        <form
          className="mx-auto sm:mt-6 lg:mt-6 max-w-xl "
          onSubmit={handleSubmit}
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
                  value={inputs.employee_id}
                  name="employeeId"
                  id="employeeId"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 cursor-not-allowed"
                  placeholder="Employee id"
                  onChange={handleChange}
                  disabled
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
                  value={inputs.name}
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Name"
                  onChange={handleChange}
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
                Email Address
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  value={inputs.email}
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="E-mail"
                  onChange={handleChange}
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
                  minLength={10}
                  value={inputs.phone}
                  name="phone"
                  id="phone"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* -----------  Doj ---------- */}
            <div data-aos="fade-right" data-aos-duration="1000">
              <label
                htmlFor="doj"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Date of joining
              </label>
              <div className="mt-2.5">
                <input
                  type="date"
                  value={inputs.doj}
                  name="doj"
                  id="doj"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Date of Joining"
                  onChange={handleChange}
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
                    checked={inputs.gender === "male"}
                    id="male"
                    className="me-2"
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="mt-5">
                  <input
                    type="radio"
                    name="gender"
                    checked={inputs.gender === "female"}
                    id="female"
                    value="female"
                    className="me-2"
                    // onChange={(e) => setGender(e.target.value)}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
            {/* -----------  Address ---------- */}
            <div data-aos="fade-right" data-aos-duration="1000">
              <label
                htmlFor="address"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  value={inputs.address}
                  name="address"
                  id="address"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Address"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            {/* -----------  Department ---------- */}
            <div data-aos="fade-left" data-aos-duration="1000">
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
                    id={department.value}
                    className="me-2"
                  />
                  <label htmlFor={department.value}>{department.value}</label>
                </div>
              ))}
            </div>
            {/* -----------  Designation  ---------- */}
            <div data-aos="fade-right" data-aos-duration="1000">
              <label
                htmlFor="designation"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Designation
              </label>
              <div className="flex flex-row flex-wrap">
                <div className="mt-2.5 me-5 ">
                  <input
                    type="radio"
                    name="designation"
                    id="vp"
                    value="Vice president"
                    className="me-2"
                    checked={inputs.designation === "Vice president"}
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
                    checked={inputs.designation === "Assistant vice president"}
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
                    checked={inputs.designation === "Executive"}
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
                    checked={inputs.designation === "Team Leader"}
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
                    checked={inputs.designation === "Manager"}

                  />
                  <label htmlFor="manager">Manager</label>
                </div>
              </div>
            </div>

            {/* -------------------------------------- */}
          </div>
          <div className="flex justify-center content-center mt-4">
            <button
              type="submit"
              className="rounded-2xl bg-cyan-500 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:scale-105 hover:shadow-2xl"
            >
              Submit
            </button>
          </div>
          
          {/* <button type="submit" className="border-1">
            Update Employee
          </button> */}
          {/* ##################################################### */}

        </form>
      )}
    </>
  );
};

// #####################################################

export default EmployeeDetails;
