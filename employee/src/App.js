import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEmployees from "./pages/AddEmployees";
import ViewEmployees from "./pages/ViewEmployees";
import UpdateEmployees from "./pages/UpdateEmployees";
import DeleteEmployees from "./pages/DeleteEmployees";
import { ToastContainer, toast } from "react-toastify";


function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEmployees />} />
        <Route path="/view" element={<ViewEmployees />} />
        <Route path="/update" element={<UpdateEmployees />} />
        <Route path="/delete" element={<DeleteEmployees />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer position="top-right" autoClose={3000} />
  </>
  );
}

export default App;
