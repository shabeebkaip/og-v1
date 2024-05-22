import { createSlice } from "@reduxjs/toolkit";


const newsSlice = createSlice({
  name: "news",
  initialState: {
    hero: null,
    newsList: null,
    newsPagination: null,
  },
  reducers: {
    setNewsHero: (state, action) => {
      state.hero = action.payload;
    },
    setNewsList: (state, action) => {
      state.newsList = action.payload;
    },
    setNewsPagination: (state, action) => {
      state.newsPagination = action.payload;
    }
  },

});

export const { setNewsHero, setNewsList, setNewsPagination } = newsSlice.actions;
export default newsSlice.reducer;