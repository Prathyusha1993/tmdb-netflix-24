import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";
import tvShowSlice from "./tvShowSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice,
        gpt: gptSlice,
        config: configSlice,
        tv: tvShowSlice
    }
});

export default appStore;