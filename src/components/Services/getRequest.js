import axios from 'axios';

const BASE_URL =
  'https://pixabay.com/api/?q=cat&page=1&key=38039497-5ee2ddc1c8430029b87bf9d3f&image_type=photo&orientation=horizontal&per_page=12';

export const getRequest = async (searchText, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${searchText}&page=${page}&key=38039497-5ee2ddc1c8430029b87bf9d3f&image_type=photo&orientation=horizontal&per_page=12`
  );
  const data = response.data;
  return data;
};

export async function fetchApi() {
  const response = await axios.get(`${BASE_URL}`);
  const data = response.data;
  console.log(data);
}

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '38039497-5ee2ddc1c8430029b87bf9d3f';
