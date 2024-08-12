import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState: {
        showGptSearch: false,
        movieName: null,
        movieResults: null
    },
    reducers: {
        toggleGPTSearchView: (state)  => {
            state.showGptSearch = !state.showGptSearch;
        },
        addTmdbSearchResults: (state, action) => {
            const {movieName, movieResults} = action.payload;
            state.movieName = movieName;
            state.movieResults = movieResults;
        }
    }
});

export const {toggleGPTSearchView, addTmdbSearchResults} = gptSlice.actions;
export default gptSlice.reducer;