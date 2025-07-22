import { useEffect } from 'react';
import { logout } from '../api/auth';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      logout(token);
      localStorage.removeItem('token');
    }
    navigate('/login');
  }, [navigate]);

  return <p>Logging out...</p>;
}