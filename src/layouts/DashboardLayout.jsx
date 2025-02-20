import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar";
import "../styles/DashboardLayout.css"; // Corrected import

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
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
                to="/" 
                className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/users" 
                className={`sidebar-link ${location.pathname === '/users' ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                Users
              </Link>
            </li>
            <li>
              <Link 
                to="/careplans" 
                className={`sidebar-link ${location.pathname === '/careplans' ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                Care Plans
              </Link>
            </li>
            <li>
              <Link 
                to="/tasks" 
                className={`sidebar-link ${location.pathname === '/tasks' ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                Tasks
              </Link>
            </li>
            <li>
              <Link 
                to="/messages" 
                className={`sidebar-link ${location.pathname === '/messages' ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                Messages
              </Link>
            </li>
            <li>
              <Link 
                to="/reports" 
                className={`sidebar-link ${location.pathname === '/reports' ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                Reports
              </Link>
            </li>
          </ul>
        </nav>
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