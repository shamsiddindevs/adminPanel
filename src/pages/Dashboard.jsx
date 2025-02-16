import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {Outlet} from "react-router-dom";


const Dashboard = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <div className="flex w-full bg-[#F4F5FA]  h-screen gap-1 p-1 overflow-hidden">
      <Sidebar toggle={toggle} setToggle={setToggle} />
      <main className="flex flex-col gap-1 h-full w-full ">
        <Navbar toggle={toggle} setToggle={setToggle}/>
        <Outlet />
      </main>
    </div>
  );
};
export default Dashboard;
