import { Link, NavLink } from "react-router-dom";
import { removeSession } from "../Helpers/SessionHelper";
const AppNav = () => {
  const handleLogout = () => {
    removeSession();
  };
  return (
    <div className="navbar fixed top-0  z-50 px-20 drop-shadow-lg bg-base-100">
      <div className="flex-1">
        <Link to={"/"}>
          <img className="w-20" src="/images/logo.png" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-2 flex gap-3">
          <li>
            <NavLink to="/create-product"> Create Product</NavLink>
          </li>
          <li>
            <NavLink to="/">Product</NavLink>
          </li>
        </ul>
        <ul className="menu menu-horizontal px-3">
          <li>
            <NavLink to="/cart-list">View Cart</NavLink>
          </li>
        </ul>

        <div className="dropdown dropdown-end px-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/user.webp" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppNav;
