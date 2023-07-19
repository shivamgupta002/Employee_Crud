const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const employeeSchema = new Schema({
  employee_id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  doj: {
    type: String,
    default: Date.now,
  },
  gender: {
    type: String,
    required: true,
  },
  newDepartment: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);

// Employee - collections created
