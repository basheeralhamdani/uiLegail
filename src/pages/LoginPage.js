import React, { useContext, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login({ email, password });
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h2 className="text-2xl mb-4">Sign in</h2>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Email</label>
        <input className="w-full p-2 mb-4 border rounded" value={email} onChange={e => setEmail(e.target.value)} type="email" required />
        <label className="block mb-2">Password</label>
        <input className="w-full p-2 mb-4 border rounded" value={password} onChange={e => setPassword(e.target.value)} type="password" required />
        <button className="w-full bg-blue-600 text-white p-2 rounded" type="submit">Sign in</button>
      </form>
      <div className="mt-4 text-sm">
        Don't have an account? <Link to="/signup" className="text-blue-600">Create one</Link>
      </div>
    </div>
  );
};

export default LoginPage;
