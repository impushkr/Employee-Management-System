import { useEmployees } from "../context/EmployeesContext";

export default function AddEmployee() {
  const {
    employeeList,
    employeeName,
    email,
    position,
    department,
    salary,
    date,
    error,
    setEmployeeName,
    setEmail,
    setPosition,
    setDepartment,
    setSalary,
    setDate,
    handleSubmit,
  } = useEmployees();

  return (
    <div className="min-h-[calc(100vh-8rem)] py-6">
      <div className="mx-auto w-full max-w-4xl rounded-[2rem] border border-slate-200 bg-white/95 p-8 shadow-xl shadow-slate-200/40 backdrop-blur-sm">
        <div className="mb-8 flex flex-col gap-3">
          <div className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Add new employee
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Create employee profile</h1>
          <p className="max-w-2xl text-sm leading-6 text-slate-500">
            Fill in the details below to add a team member and keep your employee roster up to date.
          </p>
        </div>

        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Employee Name</span>
              <input
                type="text"
                placeholder="Jane Doe"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Email</span>
              <input
                type="email"
                placeholder="jane.doe@example.com"
                className={`mt-2 w-full rounded-2xl border px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 ${
                  employeeList.some((emp) => emp.email === email) ||
                  error === "email already registered"
                    ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-100"
                    : "border-slate-200 bg-slate-50"
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Position</span>
              <input
                type="text"
                placeholder="Frontend Developer"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Department</span>
              <select
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="" disabled>
                  Select department
                </option>
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
              </select>
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Salary</span>
              <input
                type="number"
                placeholder="50000"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Joining Date</span>
              <input
                type="date"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
          </div>

          {error && (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}
