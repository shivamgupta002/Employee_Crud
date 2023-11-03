const Employee = require("../model/Employee");

//Get Employee
const getAllEmployees = async (req, res, next) => {
  // This route will provide all of the Employee
  let employees;
  try {
    employees = await Employee.find();
  } catch (err) {
    console.log(err);
  }
  if (!employees) {
    return res.status(404).json({ message: "No data found" });
  }
  return res.status(200).json({ employees });
};

//Search  Employee
const getById = async (req, res, next) => {
  const id = req.params.id;
  let employee;
  try {
    employee = await Employee.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!employee) {
    return res.status(404).json({ message: "No Data Found" });
  }
  return res.status(200).json({ employee });
};

// Add Employee
const addEmployee = async (req, res, next) => {
  const {
    employee_id,
    name,
    email,
    phone,
    doj,
    gender,
    newDepartment,
    address,
    designation,
  } = req.body;

  let employee;
  try {
    employee = new Employee({
      employee_id,
      name,
      email,
      phone,
      doj,
      gender,
      newDepartment,
      address,
      designation,
    });
    await employee.save();
  } catch (err) {
    console.log(err);
  }
  if (!employee) {
    return res.status(500).json({ message: "Unable to add" });
  }
  return res.status(201).json({ employee });
};

//Update Employee
const updateEmployee = async (req, res, next) => {
  const id = req.params.id;

  const {
    employee_id,
    name,
    email,
    phone,
    doj,
    gender,
    newDepartment,
    address,
    designation,
  } = req.body;
  let employee;
  try {
    employee = await Employee.findByIdAndUpdate(id, {
      employee_id,
      name,
      email,
      phone,
      doj,
      gender,
      newDepartment,
      address,
      designation,
    });
    employee = await employee.save();
  } catch (err) {
    console.log(err);
  }
  if (!employee) {
    return res.status(500).json({ message: "Unable to Update by ID" });
  }
  return res.status(201).json({ employee });
};

//Delete Employee
const deleteEmployee = async (req, res, next) => {
  const id = req.params.id;
  const {
    employee_id,
    name,
    email,
    phone,
    doj,
    gender,
    newDepartment,
    address,
    designation,
  } = req.body;
  let employee;
  try {
    employee = await Employee.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!employee) {
    return res.status(404).json({ message: "Unable to Delete by ID" });
  }
  return res.status(201).json({ message: "Employee Successfully Deleted" });
};

//Exports
exports.getAllEmployees = getAllEmployees;
exports.addEmployee = addEmployee;
exports.getById = getById;
exports.updateEmployee = updateEmployee;
exports.deleteEmployee = deleteEmployee;
