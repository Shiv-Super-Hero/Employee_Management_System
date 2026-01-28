import { useState } from "react";
import api from "../api";
import { toast } from "react-toastify";

function UpdateEmployee() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  const update = async () => {
    try {
      await api.put(`/employees/${id}`, { name, salary });
      toast.success("Employee updated successfully!");
      setId(""); setName(""); setSalary("");
    } catch (err) {
      toast.error("Failed to update employee");
    }
  };

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "15px", width: "400px", height: "400px",
    margin: "40px auto", border: "3px solid #4B0082", borderRadius: "12px", backgroundColor: "#FFEECC", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)"}}>
      <h2>Update Employee</h2>
      <input placeholder="Employee ID" value={id} onChange={e => setId(e.target.value)} style={{width: "200px"}}/>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} style={{width:"200px"}}/>
      <input placeholder="Salary" value={salary} type="number" onChange={e => setSalary(e.target.value)} style={{width:"200px"}}/>
      <button onClick={update} style={{cursor:"pointer",fontWeight:"bold",backgroundColor: "#4B12EF", borderRadius:"5px"}}>Update Employee</button>
    </div>
  );
}

export default UpdateEmployee;