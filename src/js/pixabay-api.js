import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '45295548-800e218e35273c9a8c48208a3';

const DEFAULT_PARAMS = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
};

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        ...DEFAULT_PARAMS,
        q: query,
      },
    })
    .then(response => response.data);
}
