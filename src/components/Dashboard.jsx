import React from "react";

function Dashboard() {
  const employees = [
    {
      id: 1,
      name: "Nick",
      position: "Frontend Developer",
      department: "IT",
      salary: 50000,
    },
    {
      id: 2,
      name: "Rahul",
      position: "Backend Developer",
      department: "IT",
      salary: 60000,
    },
    {
      id: 3,
      name: "Aman",
      position: "HR Manager",
      department: "HR",
      salary: 45000,
    },
    {
      id: 4,
      name: "Priya",
      position: "UI/UX Designer",
      department: "Design",
      salary: 55000,
    },
    {
      id: 5,
      name: "Simran",
      position: "Marketing Executive",
      department: "Marketing",
      salary: 40000,
    },
  ];

  const totalEmployees = employees.length;

  const totalSalary = employees.reduce(
    (sum, employee) => sum + employee.salary,
    0
  );

  const averageSalary = Math.round(
    totalSalary / totalEmployees
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
            {totalEmployees}
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
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="flex justify-between border-b pb-2"
            >
              <div>
                <p className="font-medium">
                  {employee.name}
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