import axios from "axios";

export const MovieService = axios.create({
    baseURL: "http://localhost:3004",
  });