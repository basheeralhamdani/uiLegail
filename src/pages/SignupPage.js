import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const SignupPage = () => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('client');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register({ email, password, name, role });
      navigate('/', { replace: true });
    } catch (err) {
      setError(err.message || 'Signup failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h2 className="text-2xl mb-4">Create account</h2>
      {error && <div className="mb-4 text-red-600">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Full name</label>
        <input className="w-full p-2 mb-4 border rounded" value={name} onChange={e => setName(e.target.value)} type="text" />
        <label className="block mb-2">Account type</label>
        <select value={role} onChange={e => setRole(e.target.value)} className="w-full p-2 mb-4 border rounded">
          <option value="client">Client / User</option>
          <option value="attorney">Attorney</option>
        </select>
        <label className="block mb-2">Email</label>
        <input className="w-full p-2 mb-4 border rounded" value={email} onChange={e => setEmail(e.target.value)} type="email" required />
        <label className="block mb-2">Password</label>
        <input className="w-full p-2 mb-4 border rounded" value={password} onChange={e => setPassword(e.target.value)} type="password" required />
        <button className="w-full bg-blue-600 text-white p-2 rounded" type="submit">Create account</button>
      </form>
      <div className="mt-4 text-sm">
        Already have an account? <Link to="/login" className="text-blue-600">Sign in</Link>
      </div>
    </div>
  );
};

export default SignupPage;
