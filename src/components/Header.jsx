import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../context/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { loggedInUser } = useContext(UserContext);

  const isOnline = useOnlineStatus();

  const cartItems = useSelector((store) => store?.cart?.items);

  return (
    <div className="flex justify-between sm:bg-pink-100 bg-amber-100 shadow-lg">
      <div className="logo-container">
        <img className="w-30 mx-8 py-1" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex pt-2">
        <ul className="flex p-4 m-4 text-lg gap-4">
          <li className=" flex items-center justify-center">
            Online Status: {isOnline ? "🟢" : "🔴"}
          </li>

          <li className="hover:bg-pink-300 rounded-lg flex items-center justify-center p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-pink-300 rounded-lg flex items-center justify-center p-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:bg-pink-300 rounded-lg flex items-center justify-center p-2">
            <Link to="/about">About us</Link>
          </li>
          <li className="hover:bg-pink-300 rounded-lg flex items-center justify-center p-2">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="hover:bg-pink-300 rounded-lg flex items-center justify-center p-2 font-bold text-lg">
            Cart - ({cartItems.length}) items
          </li>
          <li className="hover:bg-pink-300 rounded-lg flex items-center justify-center p-2">
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
          <li className="items-center justify-center p-2 flex font-bold">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
