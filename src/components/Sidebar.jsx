import {  CiCircleList, CiDeliveryTruck, CiGlobe, CiHome, CiLocationArrow1, CiLogin, CiViewBoard } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";



const Sidebar = ({toggle}) => {
let category = [
  {id:1,link:"/home/category",name:"Categories", icon:<CiCircleList />},
  {id:2,link:"/home/cars",name:"Cars", icon:<CiDeliveryTruck />},
  {id:3,link:"/home/brands",name:"Brands",icon:<CiGlobe />},
  {id:4,link:"/home/models",name:"Models", icon:<CiViewBoard />},
  {id:5,link:"/home/cities",name:"Cities", icon:<CiHome />},
  {id:6,link:"/home/locations",name:"Locations",icon:<CiLocationArrow1 />}
];


  return (
    <div className={`w-[88px] ${toggle?"md:w-[88px] md:px-4":" md:w-[296px] md:px-8 "} px-4 transition-all bg-white  rounded-md h-full py-5 overflow-hidden flex flex-col justify-between`}>
      {!toggle?<Link to={"/home"} className="text-xl text-center font-extrabold mb-10 px-2 text-[#202224]"> <span className="text-[#4880FF]">Admin</span>Panel</Link>:<Link to={"/home"} className="text-xl text-center font-extrabold mb-10 px-2 text-[#202224]"> <span className="text-[#4880FF]">A</span>P</Link>}
      <ul className="list-none">
        {category.map(item => (
          <NavLink key={item.id} to={item.link}   className={({ isActive })=>`${isActive?"bg-[#5570F1] text-white":" text-[#53545C]"} mb-2  flex gap-4 items-center hover:bg-[#5570F1] hover:text-white transition-all  px-3 py-3 rounded-[12px] max-w-[233px]`}>
            <span className="text-[24px]">{item.icon}</span>
            {!toggle&&<span  className=" text-sm">
              {item.name}
            </span>}
          </NavLink>
        ))}
      </ul>

      <button
        className=" hover:bg-[#CC5F5F] hover:text-white transition-all rounded-[12px] text-[#CC5F5F] mt-auto px-3 py-3 flex items-center  gap-4 max-w-[233px]"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}>
          <CiLogin className="text-[24px]" />
        {!toggle&&<span className="text-sm">Log Out</span>}
      </button>
    </div>
  )
}

export default Sidebar