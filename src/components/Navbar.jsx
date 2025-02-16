import {useState} from "react";
import {
  CiCircleChevDown,
  CiEdit,
  CiLogin,
  CiMenuKebab,
  CiSettings,
  CiUser,
} from "react-icons/ci";
import {Link} from "react-router-dom";

const Navbar = ({toggle, setToggle}) => {
  let userList = [
    {
      id: 1,
      title: "Profile",
      link: "/home",
      icon: <CiUser className="text-[#4E96FF]" />,
    },
    {
      id: 2,
      title: "Edit",
      link: "/home",
      icon: <CiEdit className="text-[#4AD991]" />,
    },
    {
      id: 3,
      title: "Settings",
      link: "/home",
      icon: <CiSettings className="text-[#9E8FFF]" />,
    },
    {
      id: 4,
      title: "Logout",
      link: "/",
      icon: <CiLogin className="text-[#CC5F5F]" />,
    },
  ];
  const [user, setUser] = useState(false);
  return (
    <div className="px-2.5 py-5 bg-white rounded-md flex items-center justify-between">
      <span
        className="text-xl w-8 rounded-[12px] text-[#5570F1]   bg-[#5570F1]/15 h-8  flex items-center justify-center cursor-pointer "
        onClick={() => setToggle(!toggle)}>
        <CiMenuKebab
          className={
            toggle
              ? `-rotate-90 transition-all duration-300`
              : ` transition-all duration-300`
          }
        />
      </span>
      <div
        className="relative z-10  flex items-center  group cursor-pointer "
        onClick={() => setUser(!user)}>
        <img
          src="./assets/user.png"
          className="w-8 h-8 rounded-[8px] object-cover group-hover:opacity-100 opacity-80"
          alt="user icon"
        />
        <div className="ml-5 mr-4">
          <h2 className="text-sm font-semibold text-[#404040] ">Jamshid</h2>
          <p className="text-xs text-gray-600">Admin</p>
        </div>
        <CiCircleChevDown
          className={
            user
              ? `-rotate-180 transition-all duration-300 text-2xl`
              : ` transition-all duration-300 text-2xl`
          }
        />

        <div
          className={`absolute top-[50px] right-0 transition-all bg-white rounded-[14px] text-[#404040] duration-300 w-[200px] ${
            !user ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
          style={{boxShadow: "0px 9px 40px 0px rgba(0,0,0,0.2)"}}>
          {userList.map((item) =>
            item.id !== 4 ? (
              <Link
                to={item.link}
                key={item.id}
                className="  py-3 px-5 cursor-pointer hover:bg-[#f5f5f5] flex gap-4 border-b border-[#D8D8D8]">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-semibold">{item.title}</span>
              </Link>
            ) : (
              <div
                key={item.id}
                className="  py-3 px-5 cursor-pointer hover:bg-[#f5f5f5] flex gap-4 border-b border-[#D8D8D8]"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/";
                }}>
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-semibold">{item.title}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
