import { createSlice } from "@reduxjs/toolkit";

const tvShowSlice = createSlice({
    name: 'tv',
    initialState: {
        showTvShows: false,
        arrivingTodayShows: null,
        nextWatchShow: null,
        popularShow:null,
        topRatedShow: null
    },
    reducers: {
        toggleTvShowsView: (state) => {
            state.showTvShows = !state.showTvShows;
        },
        addArrivingTodayShows:(state, action) => {
            state.arrivingTodayShows = action.payload;
        },
        addYourNextWatchShow: (state, action) => {
            state.nextWatchShow = action.payload;
        },
        addPopularTvShow:(state, action)=>{
            state.popularShow = action.payload;
        },
        addTopRatedTvShow: (state, action) => {
            state.topRatedShow = action.payload;
        }
    }
});

export const {toggleTvShowsView, addArrivingTodayShows, addTopRatedTvShow, addPopularTvShow, addYourNextWatchShow} = tvShowSlice.actions;
export default tvShowSlice.reducer;