import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export async function fetchUserData(username, token = null) {
  if (!username || !username.trim()) {
    throw new Error('Username is required');
  }

  const headers = token ? { Authorization: `token ${token}` } : {};

  try {
    const response = await axios.get(`${BASE_URL}/${encodeURIComponent(username)}`, {
      headers,
    });
    return response.data;
  } catch (err) {
    if (err.response && err.response.status === 404) {
      const e = new Error('Not Found');
      e.code = 404;
      throw e;
    }
    throw err;
  }
}
