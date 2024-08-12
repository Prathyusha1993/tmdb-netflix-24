import { createSlice } from "@reduxjs/toolkit";

const tvShowSlice = createSlice({
    name: 'tv',
    initialState: {
        showTvShows: false,
    },
    reducers: {
        toggleTvShowsView: (state) => {
            state.showTvShows = !state.showTvShows;
        }
    }
});

export const {toggleTvShowsView} = tvShowSlice.actions;
export default tvShowSlice.reducer;