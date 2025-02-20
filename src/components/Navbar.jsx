import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-links">
                    <Link to="/users" className="navbar-link">Users</Link>
                    <Link to="/careplans" className="navbar-link">Care Plans</Link>
                    <Link to="/reports" className="navbar-link">Reports</Link>    
                    <Link to="/tasks" className="navbar-link">Tasks</Link>    
                    <Link to="/messages" className="navbar-link">Messages</Link> 
                </div>

                <div className="user-profile"> 
                    <Link to="/profile" className="navbar-link">Profile</Link>   
                </div>
            </nav>
        </div>
    );
};

export default Navbar;