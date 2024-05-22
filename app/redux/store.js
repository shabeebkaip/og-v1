import { configureStore } from '@reduxjs/toolkit';
import homeReducer from '@/app/redux/homeReducer';
import programReducer from '@/app/redux/programReducer'
import careerReducer from '@/app/redux/careerReducer';
import contactReducer from '@/app/redux/contactReducer';
import newsReducer from '@/app/redux/newsReducer';
import hackathonReducer from '@/app/redux/hackathonReducer';
import paymentReducer from '@/app/redux/paymentReducer';

  
const store = configureStore({
  reducer: {
    home: homeReducer,
    program: programReducer,
    career:careerReducer,
    contact:contactReducer,
    news: newsReducer,
    hackathon: hackathonReducer,
    payment: paymentReducer,

  },
});

export default store;