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

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY = '38039497-5ee2ddc1c8430029b87bf9d3f';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '38039497-5ee2ddc1c8430029b87bf9d3f';

export async function fetchApi() {
  const response = await axios.get(`${BASE_URL}`);
  const data = response.data;
  console.log(data);
}

// export default { fetchApi };

// export const getRequest = searchText => {
//   fetch(`${BASE_URL}`).then(response => {
//     console.log(response);
//   });
// };

// export const serviceGallery = async (query, page) => {
//   const params = new URLSearchParams({
//     key: API_KEY,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     per_page: 12,
//     page: page,
//   });

//   const { data } = await axios.get(`?${params}`);
//   return data;
// };
