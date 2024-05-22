import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    hero: null,
    aboutus: null,
    services: null,
    pageContentHome: null,
    programs: null,
    community: null,
    communityList: null,
    testimonial: null,
    loading: true,
    courseList:null
  },
  reducers : {
    setHero: (state, action) => {
      state.hero = action.payload
    },
    setAboutUs: (state, action) => {
      state.aboutus = action.payload
    },
    setServices: (state, action) => {
      state.services = action.payload
    },
    setPageContentHome: (state, action) => {
      state.pageContentHome = action.payload
    },
    setPrograms: (state, action) => {
      state.programs = action.payload
    },
    setCommunity: (state, action) => {
      state.community = action.payload
    },
    setCommunityList: (state, action) => {
      state.communityList = action.payload
    },
    setTestimonial: (state, action) => {
      state.testimonial = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setCourseList: (state,action) => {
      state.courseList = action.payload
    }
  }
})

export const { setHero, setAboutUs, setServices, setPageContentHome, setPrograms, setCommunity, setCommunityList, setTestimonial, setLoading, setCourseList } = homeSlice.actions
export default homeSlice.reducer;