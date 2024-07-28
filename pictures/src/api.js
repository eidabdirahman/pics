import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID g4Pjr4AiuBM9HMr4vjKDl4XfgG81ChtwKnu2ZmNrhyc',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
