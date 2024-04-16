import { configureStore } from "@reduxjs/toolkit";
import lopHocReducer from "./reducer";

export const store = configureStore({
    reducer: lopHocReducer
})

export default store