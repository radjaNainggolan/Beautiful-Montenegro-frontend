import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
const Header = () => {

    const context = useContext(AppContext);
    const {logedIn, setLogedIn} = context;

    return (
        <nav className="flex flex-row align-middle items-center justify-between bg-white py-4 border-b-4 border-black sticky top-0 relative z-10">
            <h1 className="font-graduate text-center text-4xl text-black mx-10">Beautiful Montenegro</h1>
            <div className= "w-2/12 font-montserrat font-medium mr-24">
                {logedIn ? 
                    (   
                        <div className="flex flex-row  align-middle items-center justify-center">
                            <Link to="/newlocation">New Location</Link>
                            <Link to="/updatelocation">Update Location</Link>
                        </div>    
                    )
                    :
                    (
                        <div className="flex flex-row justify-evenly">
                            <Link to="/login">Log in</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )
                }
            </div>
        </nav>
    );
}
 
export default Header;