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

export async function searchUsers({ username = '', location = '', minRepos = 0, page = 1, per_page = 30 }) {
  const terms = [];

  if (username.trim()) {
    terms.push(`${username.trim()} in:login`);
  }

  if (location.trim()) {
    terms.push(`location:${location.trim()}`);
  }

  if (minRepos && Number(minRepos) > 0) {
    terms.push(`repos:>=${Number(minRepos)}`);
  }

  if (terms.length === 0) {
    throw new Error('At least one search criterion is required');
  }

  const q = terms.join(' ');
  const params = {
    q,
    page,
    per_page,
  };

  try {
    const { data } = await github.get('/search/users', { params });
    return {
      total: data.total_count,
      items: data.items,
      incomplete_results: data.incomplete_results,
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.response) {
        const status = err.response.status;
        if (status === 403 && err.response.headers['x-ratelimit-remaining'] === '0') {
          throw new Error('Rate limit exceeded');
        }
        const message = err.response.data?.message;
        throw new Error(message || 'GitHub Search API error');
      }
      if (err.request) {
        throw new Error('Network error. Please check your connection.');
      }
    }
    throw new Error('Unexpected error occurred');
  }
}
