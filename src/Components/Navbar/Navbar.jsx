import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png"

const Navbar = () => {
   
    return (
        <div className="md:w-[80%] mx-auto mt-12">
            <div className="navbar bg-base-100">
                <div className="md:flex-1">
                    <img src={logo} alt="" />
                </div>
                <div className="flex-none ml-6 md:ml-0">
                    <nav className="flex gap-4 md:gap-12">
                        <NavLink className="text-[#0B0B0B] text-lg" to="/">Home</NavLink>
                        <NavLink className="text-[#0B0B0B] text-lg" to="/donation">Donation</NavLink>
                        <NavLink className="text-[#0B0B0B] text-lg navlink" to="/statistics">Statistics</NavLink>

                    </nav>
                </div>
            </div>

        </div>
    );
};

export default Navbar;