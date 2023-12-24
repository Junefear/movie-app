import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { MovieService } from "../api/MovieService"


export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await MovieService.get(`/movies`);
      resolve(response.data);
    }, 1000); // 1 saniye gecikme eklendi liste yüklenimi yavaş yüklenimlerde nasıl görünüyor diye, normalde eklenmez.!
  });
});



const initialState = {
  movies: [],
  moviesLoading: false,
}



const moviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.moviesLoading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.moviesLoading = false;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.moviesLoading = false;
      });
  },
});

export default moviesSlice.reducer;