import axios from "axios";

// const apiURL = process.env.REACT_APP_API_URL;
const apiURL = "http://localhost:5001";

const API = axios.create({ baseURL: apiURL });

//API CALLS
//champions
export const fetchChampions = () => API.get("/champions");
export const fetchSingleChampion = (id) => API.get(`/champions/${id}`);
//items
export const fetchItems = () => API.get("/items");
//guides
export const fetchGuides = () => API.get("/guides");
export const fetchSingleGuide = (id) => API.get(`/guides/${id}`);
export const createGuide = (newGuide) => API.post("/guides", newGuide);
export const deleteGuide = (id) => API.delete(`/guides/${id}`);
export const updateGuide = (updatedGuide) =>
  API.patch("/guides/${id}", updatedGuide);
//user
export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const starGuide = (id, user) => API.patch(`/users/star/${id}`, user);
export const unStarGuide = (id, user) => API.patch(`/users/unstar/${id}`, user);
export const getUser = (id) => API.get(`/users/${id}`);
//comments
export const createComment = (newComment) => API.post(`/comments`, newComment);
export const deleteComment = (id) => API.delete(`/comments/${id}`);
