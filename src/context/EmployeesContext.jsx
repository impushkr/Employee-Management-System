import { createContext, useContext, useState } from "react";

const EmployeesContext = createContext();

export function EmployeesProvider({ children }) {
  const [employeeList, setEmployeeList] = useState([
    {
      id: 1,
      employeeName: "Nick",
      email: "nick@gmail.com",
      position: "Frontend Developer",
      department: "IT",
      salary: 50000,
      date: "2026-05-31",
    },
    {
      id: 2,
      employeeName: "Rahul",
      email: "rahul@gmail.com",
      position: "HR Manager",
      department: "HR",
      salary: 40000,
      date: "2026-05-30",
    },
    {
      id: 3,
      employeeName: "Priya",
      email: "priya@gmail.com",
      position: "UI/UX Designer",
      department: "Design",
      salary: 55000,
      date: "2026-05-28",
    },
  ]);
  const [employeeName, setEmployeeName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState("");
  const [editTimeError, setEditTimeError] = useState("");
  const [edit, setEdit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !employeeName ||
      !email ||
      !position ||
      !department ||
      !salary ||
      !date
    ) {
      return setError("All Fields are required");
    } else if (employeeList.map((allEmp) => allEmp.email === email)) {
      return setError("email already registered");
    }

    const newEmployee = {
      id: Date.now(),
      employeeName: employeeName,
      email: email,
      position: position,
      department: department,
      salary: salary,
      date: date,
    };

    setEmployeeList([...employeeList, newEmployee]);
    console.log(employeeList);
    alert("Employee Added");
  }

  function findEdit(e) {
    const findEmployee = employeeList.find((employee) => employee.id === e.id);

    setEmployeeName(findEmployee.employeeName);
    setEmail(findEmployee.email);
    setPosition(findEmployee.position);
    setDepartment(findEmployee.department);
    setSalary(findEmployee.salary);
    setDate(findEmployee.date);
    setId(findEmployee.id);

    setEdit(!edit);
  }

  function handleEdit(e) {
    e.preventDefault();

    if (
      !employeeName ||
      !email ||
      !position ||
      !department ||
      !salary ||
      !date
    ) {
      return setEditTimeError("All Fields are required");
    } else if (
      employeeList.some((emp) => emp.id !== id && emp.email === email)
    ) {
      return setEditTimeError("email already registered");
    }

    setEmployeeList(
      employeeList.map((pre) =>
        pre.id === id
          ? {
              ...pre,
              employeeName: employeeName,
              email: email,
              position: position,
              department: department,
              salary: salary,
              date: date,
            }
          : pre,
      ),
    );
    setEdit(!edit);
  }

  function delEmployee(e) {
    setEmployeeList(employeeList.filter((allEmp) => allEmp.id !== e.id));
  }

  return (
    <>
      <EmployeesContext.Provider
        value={{
          employeeList,
          employeeName,
          email,
          position,
          department,
          salary,
          date,
          error,
          editTimeError,
          edit,
          setEmployeeList,
          setEmployeeName,
          setEmail,
          setPosition,
          setDepartment,
          setSalary,
          setDate,
          setError,
          setEditTimeError,
          setEdit,
          handleSubmit,
          findEdit,
          handleEdit,
          delEmployee,
        }}
      >
        {children}
      </EmployeesContext.Provider>
    </>
  );
}

export function useEmployees() {
  return useContext(EmployeesContext);
}
