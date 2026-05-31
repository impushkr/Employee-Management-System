import { useState } from "react";
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
    setEmployeeList,
    setEmployeeName,
    setEmail,
    setPosition,
    setDepartment,
    setSalary,
    setDate,
    setError,
    handleSubmit,
  } = useEmployees();

  return (
    <>
      <div className="flex justify-center pt-25">
        <div className="p-6 ">
          <h1 className="text-2xl font-bold mb-4">Add Employee</h1>

          <form
            className="flex flex-col gap-4 max-w-md"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Employee Name"
              className="border p-2"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="border p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Position"
              className="border p-2"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />

            <select
              className="border p-2"
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
              className="border p-2"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />

            <input
              type="date"
              className="border p-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <p>{error}</p>

            <button type="submit" className="border p-2">
              Add Employee
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
