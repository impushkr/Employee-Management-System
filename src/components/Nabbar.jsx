import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Employee Management System
      </h1>

      <div className="flex gap-6">
        <Link
          to="/"
          className="hover:text-blue-600 font-medium"
        >
          Dashboard
        </Link>

        <Link
          to="/employees"
          className="hover:text-blue-600 font-medium"
        >
          Employees
        </Link>

        <Link
          to="/add-employee"
          className="hover:text-blue-600 font-medium"
        >
          Add Employee
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;