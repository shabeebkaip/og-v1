import { createSlice } from '@reduxjs/toolkit';


const careerSlice = createSlice({
    name: 'career',
    initialState : {
        hero:null,
        explore:null,
        globalHub:null,
        careerList:null,
        pageContentCareer:null

    },
    reducers : {
        setCareerHero: (state,action) => {
            state.hero = action.payload
        },
        setExplore: (state,action) => {
            state.explore = action.payload
        },
        setGlobalHub: (state,action) => {
            state.globalHub = action.payload
        },
        setCareerList: (state,action) => {
            state.careerList = action.payload
        },
        setCareerPageContent: (state,action) => {
            state.pageContentCareer = action.payload
        }
    }
});

export const { setCareerHero,setExplore,setGlobalHub,setCareerList,setCareerPageContent } = careerSlice.actions
export default careerSlice.reducer;