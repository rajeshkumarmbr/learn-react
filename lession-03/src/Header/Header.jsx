import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className=" w-full h-20 bg-sky-400 flex justify-between items-center ">
        <div className="w-[20%] m-4 text-4xl font-semibold text-white">
          Logo
        </div>
        <div className="w-1/2">
          <ul className="text-white flex justify-between mr-5 ">
            <li className="">
              <NavLink
                to="/?Q=99"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "isPending"
                    : isActive
                    ? "text-red-700"
                    : ` hover:text-red-500 font-semibold`
                }
                end>
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="about"
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
                end>
                About
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="products"
                className={` hover:text-red-500 font-semibold`}>
                Products
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="news"
                className={` hover:text-red-500 font-semibold`}>
                News
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="contact"
                className={` hover:text-red-500 font-semibold`}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
