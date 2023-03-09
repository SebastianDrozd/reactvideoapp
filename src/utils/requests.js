import axios from 'axios';
export const getMovies = () => {
   return axios.get("http://10.0.0.234:4000/api/v1/videos")
}
export const getMovieById = (id) => {
   return axios.get(`http://10.0.0.234:4000/api/v1/videos/${id}`)
}

export const requestMovieQuery = (name) => {
      return axios.get(`http://10.0.0.234:4000/api/v1/videos/query/search?name=${name}`)
}

export const sortQueryMovies = (name, sort) => {
   return axios.get(`http://10.0.0.234:4000/api/v1/videos/query/sort2?by=${name}&sort=${sort}`)
}
export const getPaginationMovies = (page, limit) => {
   console.log("this is page",page)
   return axios.get(`http://10.0.0.234:4000/api/v1/videos/query/paginate?page=${page}&limit=${limit}`)
}
export const getPaginationMovieWithQuery = (page, limit, query) => {
   let result = ""
  if(query.name != ""){
   result += `&name=${query.name}`
  }
  if(query.genre != ""){
   if(query.genre == "all"){
      result +=""
   }
   else{
      result += `&genre=${query.genre}`
   }
  }
   if(query.year != ""){
      if(query.year == "0"){
         result +=""
      }
      else{
         result += `&year=${query.year}`
      }
   }
   console.log(`http://10.0.0.234:4000/api/v1/videos/query/paginatesort?page=${page}&limit=${limit}${result}`)
   return axios.get(`http://10.0.0.234:4000/api/v1/videos/query/paginatesort?page=${page}&limit=${limit}${result}`)
}