import { useState } from 'react';
import { signup } from '../api/auth';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(username, password);
      setMessage('Signup successful! Please log in.');
    } catch {
      setMessage('Signup failed. Try a different username.');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
      <p>{message}</p>
    </div>
  );
}