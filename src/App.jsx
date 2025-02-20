import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Careplans from "./pages/Careplans";
import Messages from "./pages/Messages";
import Tasks from "./pages/Tasks";
import Reports from "./pages/Reports";
import UserProfile from "./pages/UserProfile"; // User Profile page

const App = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/careplans" element={<Careplans />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<UserProfile />} /> {/* User profile page */}
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;
