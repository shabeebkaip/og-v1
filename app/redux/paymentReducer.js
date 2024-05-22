import { createSlice } from "@reduxjs/toolkit";


const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    selectedPackage: null,
    checked: false,
  },
  reducers: {
    setSelectedPackage(state, action) {
      state.selectedPackage = action.payload;
    },
    setChecked(state, action) {
      state.checked = action.payload;
    }
  },
})

export const { setSelectedPackage, setChecked } = paymentSlice.actions;
export default paymentSlice.reducer;