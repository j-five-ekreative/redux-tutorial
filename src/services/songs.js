import axios from 'axios';

export const getAllSongs = ({ page = 1 } = {}) => {
  return axios
    .get(
      `https://hosana-api.herokuapp.com/api/songs?populate=file&pagination[pageSize]=100&pagination[page]=${page}`
    )
    .then((response) => {
      return response.data.data;
    });
};

export const getSongById = (id) => {
  return axios
    .get(`https://hosana-api.herokuapp.com/api/songs/${id}`)
    .then((response) => {
      
      return response.data.data;
    });
};
