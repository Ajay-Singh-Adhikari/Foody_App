import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "../../../../Brand_Page/1-brand-page/src/store/itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";

const foodStore = configureStore({
  reducer:{
    items : itemsSlice.reducer,
    fetchStatus : fetchStatusSlice.reducer,
  }
})
export default foodStore;