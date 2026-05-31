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
    setEmployeeList,
    setEmployeeName,
    setEmail,
    setPosition,
    setDepartment,
    setSalary,
    setDate,
    setEditTimeError,
    setEdit,
    handleSubmit,
    findEdit,
    handleEdit,
    delEmployee,
  } = useEmployees();

  return (
    <div>
      <div className="p-6 pt-25 relative">
        <h1 className="text-3xl font-bold mb-6">Employees</h1>

        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Employee</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Position</th>
                <th className="text-left p-4">Department</th>
                <th className="text-left p-4">Salary</th>
                <th className="text-left p-4">Joined</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {employeeList.map((employee, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">{employee.employeeName}</td>

                  <td className="p-4">{employee.email}</td>

                  <td className="p-4">{employee.position}</td>

                  <td className="p-4">{employee.department}</td>

                  <td className="p-4">₹{employee.salary}</td>

                  <td className="p-4">{employee.date}</td>

                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <button className="cursor-pointer">
                        <FiEdit
                          size={18}
                          onClick={() => {
                            findEdit(employee);
                          }}
                        />
                      </button>

                      <button className="cursor-pointer">
                        <FiTrash2
                          size={18}
                          onClick={() => {
                            delEmployee(employee);
                          }}
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {edit == true ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50">
          <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 text-center">
            <h1 className="text-2xl font-bold mb-5">Edit Employee Details</h1>

            <form className="flex flex-col gap-4" onSubmit={handleEdit}>
              <input
                type="text"
                placeholder="Employee Name"
                className="border rounded-lg p-3 outline-none"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
              />

              <input
                type="email"
                placeholder="Email"
                className="border rounded-lg p-3 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="text"
                placeholder="Position"
                className="border rounded-lg p-3 outline-none"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              />

              <select
                className="border rounded-lg p-3 outline-none"
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

              <input
                type="number"
                placeholder="Salary"
                className="border rounded-lg p-3 outline-none"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />

              <input
                type="date"
                className="border rounded-lg p-3 outline-none"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              {editTimeError && (
                <p className="text-red-500 text-sm">{editTimeError}</p>
              )}

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-black text-white rounded-lg py-3"
                >
                  Save Changes
                </button>

                <button
                  type="button"
                  className="flex-1 border rounded-lg py-3"
                  onClick={() => {
                    setEmployeeName("");
                    setEmail("");
                    setPosition("");
                    setDepartment("");
                    setSalary("");
                    setDate("");
                    setEdit(!edit);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Employees;
