import { Outlet } from "react-router-dom";
import Navbar from "./components/Nabbar";
import { EmployeesProvider } from "./context/EmployeesContext";

export default function App() {
  return (
    <>
      <EmployeesProvider>
        <Navbar />
        <Outlet />
      </EmployeesProvider>
    </>
  );
}
