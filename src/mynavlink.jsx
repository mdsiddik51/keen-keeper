import { NavLink } from "react-router-dom";


const Mynavlink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "flex items-center gap-2 bg-[#244D3F] py-2 px-3 rounded-sm text-white"
          : "flex items-center gap-2 text-[#64748B]"
      }
    >
      {children}
    </NavLink>
  );
};

export default Mynavlink;
