export default function Dashboard() {
  const token = localStorage.getItem('token');

  if (!token) {
    return <p>You are not logged in.</p>;
  }

  return <h2>Welcome to your Dashboard!</h2>;
}