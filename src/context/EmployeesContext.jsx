import { createContext,useContext,useState } from "react";

const EmployeesContext=createContext();

export function EmployeesProvider({children}){

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
    alert("Employee Added")
  }

    return(<>
    <EmployeesContext.Provider value={{employeeList,employeeName,email,position,department,salary,date,error,setEmployeeList,setEmployeeName,setEmail,setPosition,setDepartment,setSalary,setDate,setError,handleSubmit}}>{children}</EmployeesContext.Provider>
    </>)
}

export function useEmployees(){
    return useContext(EmployeesContext);
}