import OptionCard from "../components/OptionCard";

function Home() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Employee Management</h1>

      <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "30px"
      }}>
        <OptionCard
          title="Add Employee"
          description="Create a new employee"
          path="/add"
        />

        <OptionCard
          title="View Employees"
          description="View all employees"
          path="/view"
        />

        <OptionCard
          title="Update Employee"
          description="Update employee details"
          path="/update"
        />

        <OptionCard
          title="Delete Employee"
          description="Delete employee"
          path="/delete"
        />
      </div>
    </div>
  );
}

export default Home;