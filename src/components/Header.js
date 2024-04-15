import { useState } from "react";
import { LOGO_URL } from "../Utils/constant";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Logout");
    const onlineStatus = useOnlineStatus();
    const location = useLocation();

    // Function to toggle button text and handle grocery link visibility
    const toggleButton = () => {
        setBtnNameReact(prevState => (prevState === "Login" ? "Logout" : "Login"));
    };

    return (
        <div className="header flex justify-between shadow-lg  bg-pink-200">
            <div className="logo-container">
                <img src={LOGO_URL} className="logo w-56" alt="" />
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? <span style={{ fontSize: '12px', marginBottom: '4px', display: 'inline-block', position: 'relative', top: '-2px' }}>🟢</span> : <span style={{ fontSize: '12px', display: 'inline-block', position: 'relative', top: '-2px' }}>🔴</span>}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    {location.pathname !== "/groscery" && (
                        <li className="px-4">
                            <Link to="/groscery">Grocery</Link>
                        </li>
                    )}
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button
                        className="login"
                        style={{ display: 'block', margin: '0 auto', width: '100px' /* adjust width as needed */ }}
                        onClick={toggleButton}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;