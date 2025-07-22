import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
     <Router>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/signup">Signup</Link> |{' '}
        <Link to="/login">Login</Link> |{' '}
        <Link to="/dashboard">Dashboard</Link> |{' '}
        <Link to="/logout">Logout</Link>
      </nav>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
