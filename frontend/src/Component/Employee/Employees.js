import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import DataTable from "react-data-table-component";

const URL = "http://localhost:5000/Employees";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Employees = () => {
  const history = useNavigate();

  const [employees, setEmployees] = useState("");
  useEffect(() => {
    fetchHandler().then((data) => setEmployees(data.employees));
  }, []);
  // console.log(employees);

  //------------------- For Table ----------------
  const columns = [
    {
      name: "Id",
      selector: (row) => row.employee_id,
      sortable: true,
    },
    //  {
    //   name:"_id",
    //   selector: (row) => row._id,
    //   sortable: true,
    //  },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "DOJ",
      selector: (row) => row.doj,
      sortable: true,
    },
    {
      name: "gender",
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: "department",
      selector: (row) => row.newDepartment,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Designation",
      selector: (row) => row.designation,
      sortable: true,
    },
    {
      name: "Edit",
      cell: (row) => (
        <>
          <Link to={`/edit/${row._id}`} target="_blank">
            <AiOutlineEdit
              className="mr-4 text-xl text-yellow-400 hover:text-yellow-700 transition-all duration-500 ease-in-out hover:scale-110"
              LinkComponent={Link}
              to={`/edit/${row._id}`}
            />
          </Link>
          <AiFillDelete
            className="text-xl text-red-500 hover:text-red-600 transition-all duration-500 ease-in-out hover:scale-110"
            onClick={() => {
              deleteHandler(row._id);
            }}
          />
        </>
      ),
    },
  ];

  //------------------- For Delete ----------------
  const deleteHandler = async (_id) => {
    console.log(_id);
    await axios
      .delete(`http://localhost:5000/employees/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"));
  };

  return (
    <div>
      <DataTable
        title="Employee Details"
        columns={columns}
        data={employees}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        striped
        responsive
        noDataText="No data found"
        paginationRowsPerPageOptions={[10, 25, 50, 75, 100]}
        paginationRowsPerPage={10}
      />
    </div>
  );
};

export default Employees;
