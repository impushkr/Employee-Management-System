import { Outlet } from "react-router-dom";
import Navbar from "./components/Nabbar";


export default function App(){

  return(<>
  <Navbar/>
  <Outlet/>
  </>)
}