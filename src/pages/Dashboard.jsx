import { useState, useEffect } from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activePlans: 0,
    pendingTasks: 0,
    unreadMessages: 0
  });

  useEffect(() => {
    // Simulated data - replace with actual API calls
    setStats({
      totalUsers: 156,
      activePlans: 32,
      pendingTasks: 12,
      unreadMessages: 5
    });
  }, []);

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p className="welcome-text">Welcome back, Admin</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <div className="stat-value">{stats.totalUsers}</div>
          <p className="stat-label">Registered users</p>
        </div>
        
        <div className="stat-card">
          <h3>Active Care Plans</h3>
          <div className="stat-value">{stats.activePlans}</div>
          <p className="stat-label">Currently active</p>
        </div>

        <div className="stat-card">
          <h3>Pending Tasks</h3>
          <div className="stat-value">{stats.pendingTasks}</div>
          <p className="stat-label">Require attention</p>
        </div>

        <div className="stat-card">
          <h3>Unread Messages</h3>
          <div className="stat-value">{stats.unreadMessages}</div>
          <p className="stat-label">New messages</p>
        </div>
      </div>

      <section className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-time">2 hours ago</span>
            <p>New user registration: John Doe</p>
          </div>
          <div className="activity-item">
            <span className="activity-time">3 hours ago</span>
            <p>Care plan updated for: Sarah Smith</p>
          </div>
          <div className="activity-item">
            <span className="activity-time">5 hours ago</span>
            <p>Task completed: Monthly Report Generation</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;