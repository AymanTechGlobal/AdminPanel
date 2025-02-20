import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    // Get the redirect path from location state or default to dashboard
    const from = location.state?.from?.pathname || "/";

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        if (email === 'admin@gmail.com' && password === 'admin') {
            try {
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('user', JSON.stringify({
                    email,
                    name: 'Admin User',
                    role: 'admin'
                }));
                
                // Navigate to dashboard
                navigate('/dashboard');
            } catch {
                setError('An error occurred during login');
            }
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Admin Login</h2>
                <form className="login-form" onSubmit={handleLogin}>
                    {error && <div className="login-error">{error}</div>}
                    
                    <input
                        type="email" 
                        placeholder="Email" 
                        className="login-input" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password" 
                        className="login-input" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                <div className="login-help">
                    <p>Demo credentials:</p>
                    <p>Email: admin@gmail.com</p>
                    <p>Password: admin</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
