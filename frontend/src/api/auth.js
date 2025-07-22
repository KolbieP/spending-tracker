const BASE_URL = 'http://localhost:8000'; // Django server

export async function signup(username, password) {
  const response = await fetch(`${BASE_URL}/auth/users/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) throw new Error('Signup failed');
  return response.json();
}

export async function login(username, password) {
  const response = await fetch(`${BASE_URL}/auth/token/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) throw new Error('Login failed');
  return response.json(); // returns { auth_token }
}

export async function logout(token) {
  await fetch(`${BASE_URL}/auth/token/logout/`, {
    method: 'POST',
    headers: { Authorization: `Token ${token}` },
  });
}