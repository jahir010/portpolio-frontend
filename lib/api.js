import apiClient from './apiClient';

// Portfolio endpoints - customize based on your backend
export const portfolioAPI = {
  // Get all portfolio data (optional - can be static or from backend)
  getPortfolio: async () => {
    try {
      const response = await apiClient.get('/portfolio');
      return response.data;
    } catch (error) {
      console.log('Using fallback portfolio data');
      return null;
    }
  },

  // Get about section
  getAbout: async () => {
    try {
      const response = await apiClient.get('/about');
      return response.data;
    } catch (error) {
      console.log('Error fetching about:', error);
      return null;
    }
  },

  // Get skills
  getSkills: async () => {
    try {
      const response = await apiClient.get('/skills');
      return response.data;
    } catch (error) {
      console.log('Error fetching skills:', error);
      return null;
    }
  },

  // Get experience
  getExperience: async () => {
    try {
      const response = await apiClient.get('/experience');
      return response.data;
    } catch (error) {
      console.log('Error fetching experience:', error);
      return null;
    }
  },

  // Get projects
  getProjects: async () => {
    try {
      const response = await apiClient.get('/projects');
      return response.data;
    } catch (error) {
      console.log('Error fetching projects:', error);
      return null;
    }
  },

  // Get education
  getEducation: async () => {
    try {
      const response = await apiClient.get('/education');
      return response.data;
    } catch (error) {
      console.log('Error fetching education:', error);
      return null;
    }
  },

  // Get certificates
  getCertificates: async () => {
    try {
      const response = await apiClient.get('/certificates');
      return response.data;
    } catch (error) {
      console.log('Error fetching certificates:', error);
      return null;
    }
  },

  // Contact form
  sendMessage: async (formData) => {
    try {
      const response = await apiClient.post('/contact', formData);
      return response.data;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },
};

export default portfolioAPI;
