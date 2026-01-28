import { useEffect, useState } from "react";
import api from "../api";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

function ViewEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get("/employees").then(res => setEmployees(res.data));
  }, []);

  return (
    <div style={{ margin: "40px", backgroundColor: "#FFEECC", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", border: "3px solid #4B0082", borderRadius: "12px" }}>
      <h2>All Employees</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Salary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((e) => (
              <TableRow key={e.empNo}>
                <TableCell>{e.empNo}</TableCell>
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.salary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ViewEmployees;