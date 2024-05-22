import { createSlice } from '@reduxjs/toolkit';

const programSlice = createSlice({
  name: 'program',
  initialState: {
    hero: null,
    program: null,
    programDetails:null,
    pageContentProgram:null,
    
  },
  reducers : {
    setProgramHero: (state, action) => {
      state.hero = action.payload
    },
    setProgram: (state, action) => {
      state.program = action.payload
    },
    setProgramDetails: (state,action) => {
      state.programDetails = action.payload
    },
    setProgramPageContent: (state,action) => {
      state.pageContentProgram = action.payload
    },
   

  }
});

export const { setProgramHero, setProgram ,setProgramDetails,setProgramPageContent,  } = programSlice.actions
export default programSlice.reducer;