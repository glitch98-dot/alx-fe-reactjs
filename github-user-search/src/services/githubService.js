import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';

const github = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: {
    Accept: 'application/vnd.github+json',
    ...(import.meta.env.VITE_GITHUB_TOKEN
      ? { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` }
      : {}),
  },
  timeout: 10000,
});

export async function fetchUserData(username) {
  if (!username || typeof username !== 'string' || !username.trim()) {
    throw new Error('Username is required');
  }

  try {
    const { data } = await github.get(`/users/${encodeURIComponent(username.trim())}`);
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.response) {
        const status = err.response.status;
        if (status === 404) {
          throw new Error('User not found');
        }
        if (status === 403 && err.response.headers['x-ratelimit-remaining'] === '0') {
          throw new Error('Rate limit exceeded');
        }
        const message = err.response.data?.message;
        throw new Error(message || 'GitHub API error');
      }
      if (err.request) {
        throw new Error('Network error. Please check your connection.');
      }
    }
    throw new Error('Unexpected error occurred');
  }
}
