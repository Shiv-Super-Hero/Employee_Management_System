import { useState } from "react";
import api from "../api";
import { toast } from "react-toastify";

function AddEmployee() {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  const submit = async () => {
    try {
      await api.post("/employees", { name, salary });
      toast.success("Employee added successfully!");
      setName("");
      setSalary("");
    } catch (err) {
      toast.error("Failed to add employee");
    }
  };

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "15px", width: "400px", height: "400px",
    margin: "40px auto", border: "3px solid #4B0082", borderRadius: "12px", backgroundColor: "#FFEECC", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)"}}>
      <h2>Add Employee</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Salary"
        value={salary}
        type="number"
        onChange={(e) => setSalary(e.target.value)}
      />
      <button onClick={submit}>Add Employee</button>
    </div>
  );
}

export default AddEmployee;