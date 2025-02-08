import {BiChevronDown} from "react-icons/bi";
import {SlPieChart} from "react-icons/sl";
import MyChart from "../components/Chart";
import {GoFileDirectory, GoPeople, GoPlus} from "react-icons/go";
import {BsHandbag, BsHandbagFill} from "react-icons/bs";
import {FiShoppingCart} from "react-icons/fi";
import MyBarChart from "../components/ChartBar";

const Home = () => {
  return (
    <div className="flex-1  h-full  overflow-auto px-5 py-4 ">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:h-[850px] grid-rows-5">
        <div className="bg-white rounded-xl px-4 py-3 flex flex-col justify-between ">
          <div className="flex justify-between items-center ">
            <span className="w-9 h-9 rounded-lg bg-[#5570F1]/[12%] flex items-center justify-center">
              <SlPieChart className="text-xl text-[#5570F1] " />
            </span>
            <div className="flex items-center gap-2 cursor-pointer group  relative text-black/10 hover:text-black/30">
              <div className=" text-xs">This week</div>
              <span>
                <BiChevronDown className="font-extrabold  text-[12px]" />
              </span>
              <ul className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all rounded-md px-2.5 py-2  text-xs shadow-xs bg-white right-0 top-full">
                <li className="hover:text-black/50">Mon</li>
                <li className="hover:text-black/50">Thue</li>
                <li className="hover:text-black/50">Sun</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm  text-black/30">Sales</h3>
              <p className="text-xl font-medium text-black/60">₦4,000,000.00</p>
            </div>
            <div>
              <h3 className="text-sm  text-black/30">Volume</h3>
              <p className="text-xl font-medium text-black/60">
                450{" "}
                <span className="text-[#519C66] font-normal text-xs">
                  +20.00%
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl px-4 py-3 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="w-9 h-9 rounded-lg bg-[#CC5F5F]/[12%] flex items-center justify-center">
              <GoPeople className="text-xl text-[red]/60 " />
            </span>
            <div className="flex items-center gap-2 cursor-pointer group text-black/10 relative hover:text-black/30">
              <div className=" text-xs">This week</div>
              <span>
                <BiChevronDown className="font-extrabold  text-[12px]" />
              </span>
              <ul className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all rounded-md px-2.5 py-2  text-xs shadow-xs bg-white right-0 top-full">
                <li className="hover:text-black/50">Mon</li>
                <li className="hover:text-black/50">Thue</li>
                <li className="hover:text-black/50">Sun</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm  text-black/30">Customers</h3>
              <p className="text-xl font-medium text-black/60">
                1,250{" "}
                <span className="text-[#519C66] font-normal text-xs">
                  +15.80%
                </span>
              </p>
            </div>
            <div>
              <h3 className="text-sm  text-black/30">Active</h3>
              <p className="text-xl font-medium text-black/60">
                450{" "}
                <span className="text-[red]/60 font-normal text-xs">
                  -4.90%
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl px-4 py-3 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <span className="w-9 h-9 rounded-lg bg-[green]/[12%] flex items-center justify-center">
              <BsHandbag className="text-xl text-[green]/60 " />
            </span>
            <div className="flex items-center gap-2 cursor-pointer group text-black/10 relative hover:text-black/30">
              <div className=" text-xs">This week</div>
              <span>
                <BiChevronDown className="font-extrabold  text-[12px]" />
              </span>
              <ul className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all rounded-md px-2.5 py-2 z-10  text-xs bg-white shadow-xs right-0 top-full">
                <li className="hover:text-black/50">Mon</li>
                <li className="hover:text-black/50">Thue</li>
                <li className="hover:text-black/50">Sun</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 ">
            <div>
              <h3 className="  text-sm  text-black/30">Customers</h3>
              <p className="text-xl font-medium text-black/60">450 </p>
            </div>
            <div>
              <h3 className="  text-sm  text-black/30">Active</h3>
              <p className="text-xl font-medium text-black/60">58</p>
            </div>
            <div>
              <h3 className="  text-sm  text-black/30">Active</h3>
              <p className="text-xl font-medium text-black/60">445 </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl px-4 py-3 row-span-2 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Marketting</h2>
            <div className="flex items-center gap-2 cursor-pointer group  relative text-black/10 hover:text-black/30">
              <div className=" text-xs">This week</div>
              <span>
                <BiChevronDown className="font-extrabold  text-[12px]" />
              </span>
              <ul className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all rounded-md px-2.5 py-2  text-xs shadow-xs  bg-white right-0 top-full">
                <li className="hover:text-black/50">Mon</li>
                <li className="hover:text-black/50">Thue</li>
                <li className="hover:text-black/50">Sun</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 ">
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 rounded-full bg-[#5570F1]"></span>
              <p className="text-xs font-medium text-black/20">Acquisition</p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 rounded-full bg-[#00C49F]"></span>
              <p className="text-xs font-medium text-black/20">Purchase</p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 rounded-full bg-[#FFCC91]"></span>
              <p className="text-xs font-medium text-black/20">Retention</p>
            </div>
          </div>
          <div className="flex-1">
            <MyChart />
          </div>
        </div>
        <div className="bg-[#5570F1] text-white rounded-xl px-4 py-3 flex flex-col justify-between ">
          <div className="flex justify-between items-center ">
            <span className="w-9 h-9 rounded-lg bg-[white]/[10%] flex items-center justify-center">
              <GoFileDirectory className="text-xl text-[white] " />
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm  text-white">All Products</h3>
              <p className="text-xl font-medium text-white">45</p>
            </div>
            <div>
              <h3 className="text-sm  text-white">Sale</h3>
              <p className="text-xl font-medium text-white">
                45{" "}
                <span className="text-white/70 font-normal text-xs">
                  +24.00%
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl px-4 py-3 row-span-4">
          <h2 className="font-medium text-black/60">Recently Order</h2>
          <div className="w-full h-full flex items-center justify-center flex-col text-center ">
            <span className="w-[140px] h-[140px] bg-[#F4F5FA] rounded-full flex justify-center items-center mb-3">
              <BsHandbagFill className="text-[60px] text-black/10" />
            </span>
            <h3 className="text-xl font-medium mb-3">No Orders Yet?</h3>
            <p className="text-sm text-black/30 max-w-60">
              Add products to your store and start selling to see orders here.
            </p>
            <button className="px-4 py-4 mt-6 rounded-xl text-white w-full text-xl bg-[#5570F1] max-w-[180px] mx-auto flex gap-2 items-center">
              <GoPlus className="text-xl" />
              <span>New Product</span>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl px-4 pt-3 pb-6 flex flex-col justify-between ">
          <div className="flex justify-between items-center ">
            <span className="w-9 h-9 rounded-lg bg-[red]/[12%] flex items-center justify-center">
              <FiShoppingCart className="text-xl text-[red]/60 " />
            </span>
            <div className="flex items-center gap-2 cursor-pointer group  relative text-black/10 hover:text-black/30">
              <div className=" text-xs">This week</div>
              <span>
                <BiChevronDown className="font-extrabold  text-[12px]" />
              </span>
              <ul className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all rounded-md px-2.5 py-2  text-xs shadow-xs bg-white right-0 top-full">
                <li className="hover:text-black/50">Mon</li>
                <li className="hover:text-black/50">Thue</li>
                <li className="hover:text-black/50">Sun</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm  text-[red]/40">Abandoned Cart</h3>
              <p className="text-xl font-medium text-black/60">
                20%{" "}
                <span className="text-[#519C66] font-normal text-xs">
                  +0.00%
                </span>
              </p>
            </div>
            <div>
              <h3 className="text-sm  text-black/30">Customers</h3>
              <p className="text-xl font-medium text-black/60">30</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl px-4 py-3 col-span-2 row-span-2 flex flex-col gap-3">
          <div className="flex justify-between items-center ">
            <div className="flex gap-5 items-center">
              <h2 className="">Summary</h2>
              <div className="px-2 py-1 bg-[#5570F1]/10 rounded-lg  flex items-center gap-5 cursor-pointer group  relative text-[#5570F1]/60 ">
                <span> Sales</span>
                <BiChevronDown className="font-extrabold  text-[12px]" />
              </div>
            </div>
            <div className="flex items-center gap-2 cursor-pointer group  relative text-black/60">
              <div className=" text-xs">Last 7 days</div>
              <span>
                <BiChevronDown className="font-extrabold  text-[12px]" />
              </span>
              <ul className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all rounded-md px-2.5 py-2  text-xs shadow-xs bg-white right-0 top-full">
                <li className="hover:text-black/50">Mon</li>
                <li className="hover:text-black/50">Thue</li>
                <li className="hover:text-black/50">Sun</li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <MyBarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
