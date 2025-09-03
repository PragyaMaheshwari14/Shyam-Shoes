import { NavLink } from "react-router-dom";
import { FaPlus, FaList, FaBox } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/add"
        >
          <FaPlus className="w-5 h-5 text-gray-600" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/list"
        >
          <FaList className="w-5 h-5 text-gray-600" />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
          to="/orders"
        >
          <FaBox className="w-5 h-5 text-gray-600" />
          <p className="hidden md:block">Orders Items</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
