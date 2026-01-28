import { useState } from "react";
import api from "../api";
import { toast } from "react-toastify";

function DeleteEmployee() {
  const [id, setId] = useState("");

  const remove = async () => {
    try {
      await api.delete(`/employees/${id}`);
      toast.success("Employee deleted successfully!");
      setId("");
    } catch (err) {
      toast.error("Failed to delete employee");
    }
  };

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "15px", width: "400px", height: "400px",
    margin: "40px auto", border: "3px solid #4B0082", borderRadius: "12px", backgroundColor: "#FFEECC", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)"}}>
      <h2>Delete Employee</h2>
      <input placeholder="Employee ID" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={remove} style={{cursor:"pointer",fontWeight:"bold",backgroundColor: "#4B12EF", borderRadius:"5px"}}>Delete Employee</button>
    </div>
  );
}

export default DeleteEmployee;