import { createSlice } from "@reduxjs/toolkit";


const hackathonSlice = createSlice({
  name: "hackathon",
  initialState: {
    hackathon : null,
    hero: null,
    pageContent: null,
  },
  reducers: {
    setHackathon: (state, action) => {
      state.hackathon = action.payload;
    },
    setHackathonHero: (state, action) => {
      state.hero = action.payload;
    },
    setHackathonPageContent: (state, action) => {
      state.pageContent = action.payload;
    },
  },

});

export const { setHackathon, setHackathonHero, setHackathonPageContent } = hackathonSlice.actions;
export default hackathonSlice.reducer;