import api from './api';

class GitHubService {
  async fetchUserData(username) {
    try {
      if (!username || username.trim() === '') {
        throw new Error('Username is required');
      }

      const response = await api.get(`/users/${username.trim()}`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new Error('User not found');
      } else if (error.response?.status === 403) {
        throw new Error('API rate limit exceeded. Please try again later.');
      } else {
        throw new Error('Failed to fetch user data. Please try again.');
      }
    }
  }

  async searchUsers(query, perPage = 10) {
    try {
      const response = await api.get('/search/users', {
        params: {
          q: query,
          per_page: perPage,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to search users. Please try again.');
    }
  }

  async fetchUserRepos(username) {
    try {
      const response = await api.get(`/users/${username}/repos`, {
        params: {
          sort: 'updated',
          per_page: 10,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch user repositories.');
    }
  }
}

const githubService = new GitHubService();
export default githubService;