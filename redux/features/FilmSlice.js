import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  films: [
    {   id: 1,
        title: "Inception",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology.",       
        rating: 5,
        posterURL: "https://m.media-amazon.com/images/I/51s+4GZ1JvL._AC_SY445_.jpg",
    },
    {   id: 2,
        title: "The Matrix",
        description: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
        rating: 5,
        posterURL: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY445_.jpg",
    },
    {   id: 3,
        title: "Interstellar",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        rating: 4,  
        posterURL: "https://m.media-amazon.com/images/I/71n58v0zK3L._AC_SY679_.jpg",
    },
  ],
  searchTerm: "",
};



const filmSlice = createSlice({
  name: "films",
  initialState,
    reducers: {
    addFilm: (state, action) => {
        state.films.push(action.payload);
    },
    },
    removeFilm: (state, action) => {
        state.films = state.films.filter(film => film.id !== action.payload);
    },
    setSearchTerm: (state, action) => {
        state.searchTerm = action.payload;
    },
  editFilm: (state, action) => {
    const { id, title, description, rating, posterURL } = action.payload;
    const existingFilm = state.films.find(film => film.id === id);
    if (existingFilm) {
      existingFilm.title = title;
      existingFilm.description = description;
      existingFilm.rating = rating;
      existingFilm.posterURL = posterURL;
    }   
    },
});

export const { addFilm, removeFilm, editFilm, setSearchTerm } = filmSlice.actions;
export default filmSlice.reducer;