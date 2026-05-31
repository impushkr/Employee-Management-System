import { useState } from "react";

export default function AddEmployee() {

  const [employeeList, setEmployeeList] = useState([]);
  const [employeeName, setEmployeeName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    if(!employeeName||!email||!position||!department||!salary||!date){
        return(setError("All Fields are required"))
    }

    const newEmployee = {
      employeeName: employeeName,
      email: email,
      position: position,
      department: department,
      salary: salary,
      date: date,
    };

    setEmployeeList([...employeeList, newEmployee]);
    console.log(employeeList);
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="p-6 ">
        <h1 className="text-2xl font-bold mb-4">Add Employee</h1>

        <form className="flex flex-col gap-4 max-w-md" onSubmit={handleSubmit}>
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

          <input
            type="text"
            placeholder="Department"
            className="border p-2"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />

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
