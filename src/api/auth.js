import api from './index';

export const signup = async (formData) => {
  try {
    const response = await api.post('/auth/signup', formData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
