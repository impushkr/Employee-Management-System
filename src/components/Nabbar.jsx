import { NavLink } from "react-router-dom";

function Navbar() {
  const navClass = ({ isActive }) =>
    `font-medium transition rounded-full px-4 py-2 ${
      isActive
        ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10"
        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
    }`;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-sky-600">HR Dashboard</p>
          <h1 className="text-xl font-semibold tracking-tight text-slate-900">Employee Management System</h1>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <NavLink to="/" className={navClass}>
            Dashboard
          </NavLink>
          <NavLink to="/employees" className={navClass}>
            Employees
          </NavLink>
          <NavLink to="/add-employee" className={navClass}>
            Add Employee
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;