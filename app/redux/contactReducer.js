import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    hero: null,
    communityList: null,
  },
  reducers: {
    setContactHero: (state, action) => {
      state.hero = action.payload;
    },
    setContactCommunityList: (state, action) => {
      state.communityList = action.payload;
    },
  },
});

export const { setContactHero, setContactCommunityList } = contactSlice.actions;
export default contactSlice.reducer;