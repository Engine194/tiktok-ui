import * as request from '../../request';

export const search = async ({ query, type = 'less' }) => {
  try {
    const response = request.get('/users/search', {
      params: {
        q: query,
        type,
      },
    });
    return response;
  } catch (error) {
    console.log('Something went wrong...', error);
  }
};
