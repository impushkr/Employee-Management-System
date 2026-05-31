import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useEmployees } from "../context/EmployeesContext";

function Employees() {
  const {
    employeeList,
    employeeName,
    email,
    position,
    department,
    salary,
    date,
    editTimeError,
    edit,
    setEmployeeName,
    setEmail,
    setPosition,
    setDepartment,
    setSalary,
    setDate,
    setEdit,
    findEdit,
    handleEdit,
    delEmployee,
  } = useEmployees();

  return (
    <div className="min-h-[calc(100vh-8rem)] py-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-xl shadow-slate-200/40">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Employee roster</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">Employees</h1>
          </div>
          <p className="max-w-xl text-sm text-slate-500">
            Manage employee details, edit records quickly, and remove former team members with confidence.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-100 text-slate-600">
              <tr>
                <th className="px-5 py-4 font-medium">Employee</th>
                <th className="px-5 py-4 font-medium">Email</th>
                <th className="px-5 py-4 font-medium">Position</th>
                <th className="px-5 py-4 font-medium">Department</th>
                <th className="px-5 py-4 font-medium">Salary</th>
                <th className="px-5 py-4 font-medium">Joined</th>
                <th className="px-5 py-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {employeeList.length ? (
                employeeList.map((employee) => (
                  <tr key={employee.id} className="hover:bg-slate-50">
                    <td className="px-5 py-4">
                      <p className="font-semibold text-slate-900">{employee.employeeName}</p>
                    </td>
                    <td className="px-5 py-4 text-slate-600">{employee.email}</td>
                    <td className="px-5 py-4 text-slate-600">{employee.position}</td>
                    <td className="px-5 py-4 text-slate-600">{employee.department}</td>
                    <td className="px-5 py-4 text-slate-900">₹{Number(employee.salary).toLocaleString()}</td>
                    <td className="px-5 py-4 text-slate-600">{employee.date}</td>
                    <td className="px-5 py-4">
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
                          onClick={() => findEdit(employee)}
                        >
                          <FiEdit size={16} />
                          Edit
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-2 text-red-700 transition hover:bg-red-100"
                          onClick={() => delEmployee(employee)}
                        >
                          <FiTrash2 size={16} />
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-10 text-center text-slate-500">
                    No employees found. Add someone new to populate the roster.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {edit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4 py-8 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-900/20">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Edit record</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">Update employee details</h2>
              </div>
              <button
                type="button"
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
                onClick={() => setEdit(false)}
              >
                Close
              </button>
            </div>

            <form className="grid gap-4" onSubmit={handleEdit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Employee Name"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)}
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Position"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />

                <select
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="" disabled>
                    Department
                  </option>
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="Design">Design</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="number"
                  placeholder="Salary"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />

                <input
                  type="date"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              {editTimeError && (
                <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {editTimeError}
                </p>
              )}

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                  onClick={() => {
                    setEmployeeName("");
                    setEmail("");
                    setPosition("");
                    setDepartment("");
                    setSalary("");
                    setDate("");
                    setEdit(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Employees;
