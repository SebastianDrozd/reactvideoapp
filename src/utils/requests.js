import axios from 'axios';
export const getPopularMovies = () => {
   return axios.get("http://localhost:4000/api/v1/videos")
}