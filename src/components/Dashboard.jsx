import React from "react";
import { useEmployees } from "../context/EmployeesContext";

function Dashboard() {
  const {employeeList}=useEmployees();

  const totalSalary = employeeList.reduce(
    (sum, employee) => sum + employee.salary,
    0
  );

  const averageSalary = Math.round(
    totalSalary / employeeList.length
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow rounded-lg p-5">
          <h2 className="text-gray-500">
            Total Employees
          </h2>
          <p className="text-3xl font-bold">
            {employeeList.length}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <h2 className="text-gray-500">
            Total Salary Expense
          </h2>
          <p className="text-3xl font-bold">
            ₹{totalSalary}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <h2 className="text-gray-500">
            Average Salary
          </h2>
          <p className="text-3xl font-bold">
            ₹{averageSalary}
          </p>
        </div>
      </div>

      {/* Recent Employees */}
      <div className="bg-white shadow rounded-lg p-5">
        <h2 className="text-xl font-semibold mb-4">
          Recent Employees
        </h2>

        <div className="space-y-3">
          {employeeList.map((employee) => (
            <div
              key={employee.id}
              className="flex justify-between border-b pb-2"
            >
              <div>
                <p className="font-medium">
                  {employee.employeeName}
                </p>
                <p className="text-sm text-gray-500">
                  {employee.department}
                </p>
              </div>

              <p>{employee.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;