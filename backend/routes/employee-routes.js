const express = require("express");
const router = express.Router();
const Employee = require("../model/Employee");
const employeeController = require("../controllers/employee-controller");

router.get("/", employeeController.getAllEmployees);
router.post("/", employeeController.addEmployee);
router.get("/:id", employeeController.getById);
router.put("/:id", employeeController.updateEmployee);
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
