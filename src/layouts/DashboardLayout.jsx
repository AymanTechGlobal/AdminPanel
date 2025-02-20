import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import "../styles/DashboardLayout.css"; // Corrected import

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn"
        onClick={toggleSidebar}
      >
        <span className="menu-icon"></span>
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
          <button className="close-sidebar" onClick={toggleSidebar}>×</button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link 
                to="/dashboard"
                className={`sidebar-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/dashboard/users"
                className={`sidebar-link ${location.pathname === '/dashboard/users' ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                Users
              </Link>
            </li>
            <li>
              <Link 
                to="/dashboard/careplans"
                className={`sidebar-link ${location.pathname === '/dashboard/careplans' ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                Care Plans
              </Link>
            </li>
            <li>
              <Link 
                to="/dashboard/tasks"
                className={`sidebar-link ${location.pathname === '/dashboard/tasks' ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                Tasks
              </Link>
            </li>
            <li>
              <Link 
                to="/dashboard/messages"
                className={`sidebar-link ${location.pathname === '/dashboard/messages' ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                Messages
              </Link>
            </li>
            <li>
              <Link 
                to="/dashboard/reports"
                className={`sidebar-link ${location.pathname === '/dashboard/reports' ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                Reports
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <button 
            onClick={handleLogout}
            className="logout-btn"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="content-wrapper">
      
        <main className="main-content">{children}</main>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;