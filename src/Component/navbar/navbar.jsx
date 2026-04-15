import { IoHomeOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";
import Mynavlink from "../../mynavlink";

const Navbar = () => {
  return (
    <div className="bg-[#FFFFFF] p-4 shadow-md ">
      <div className="flex flex-col md:flex-row md:justify-between items-center w-11/12 mx-auto">
        <div>
          <img src="/assets/logo.png" alt="logo" />
        </div>
        <div className="flex gap-4">
          <Mynavlink to={"/home"}>
            <IoHomeOutline />
            Home
          </Mynavlink>
          <Mynavlink to={"/no1"}>
            <CiTimer />
            Timeline
          </Mynavlink>
          <Mynavlink to={"/no2"}>
            <FaChartLine />
            Stats
          </Mynavlink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
