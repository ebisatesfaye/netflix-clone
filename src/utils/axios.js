import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;


// full link to api videos = https://api.themoviedb.org/3/discover/movie?api_key=307cc7c5fd582f7bdbf7b3ac93ad1de5&with_genres=28

// https://api.themoviedb.org/3/discover/tv?api_key=307cc7c5fd582f7bdbf7b3ac93ad1de5 &with_networks=213