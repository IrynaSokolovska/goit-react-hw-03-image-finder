const BASE_URL =
  'https://pixabay.com/api/?q=cat&page=1&key=38039497-5ee2ddc1c8430029b87bf9d3f&image_type=photo&orientation=horizontal&per_page=12';

export const getRequest = searchText => {
  return fetch(`${BASE_URL}/everything?q=${searchText}`);
};

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY = '38039497-5ee2ddc1c8430029b87bf9d3f';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '38039497-5ee2ddc1c8430029b87bf9d3f';

// function fetchApi() {
//   axios.get(`${BASE_URL}`).then(response => {
//     console.log(response);
//   });
// }

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
