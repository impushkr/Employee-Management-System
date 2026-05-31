import { Outlet } from "react-router-dom";
import Navbar from "./components/Nabbar";
import { EmployeesProvider } from "./context/EmployeesContext";

export default function App() {
  return (
    <EmployeesProvider>
      <Navbar />
      <main className="min-h-screen bg-slate-100 pt-28 pb-10">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </EmployeesProvider>
  );
}
