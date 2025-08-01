import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';

const getAuthHeader = () => {
  const token = import.meta.env.VITE_APP_GITHUB_API_TOKEN;
  return token ? { Authorization: `token ${token}` } : {};
};

export const searchUsers = async (query) => {
  const response = await axios.get(
    `${GITHUB_API_BASE}/search/users`,
    {
      params: { q: query },
      headers: {
        ...getAuthHeader(),
        Accept: 'application/vnd.github+json',
      },
    }
  );
  return response.data;
};

export const getUser = async (username) => {
  const response = await axios.get(
    `${GITHUB_API_BASE}/users/${username}`,
    {
      headers: {
        ...getAuthHeader(),
        Accept: 'application/vnd.github+json',
      },
    }
  );
  return response.data;
};
