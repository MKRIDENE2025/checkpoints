import {configureStore} from '@reduxjs/toolkit';
import filmReducer from '../features/FilmSlice';


const store = configureStore({
reducer: {
    films: filmReducer,
}
})
export default store;