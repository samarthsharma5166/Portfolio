import { createSlice } from "@reduxjs/toolkit";
import { createElement } from "react";

const pageSlice = createSlice({
  name:"page",
  initialState:{
    page:"CreateProjects"
  },
  reducers:{
    setPage:(state,action)=>{
      state.page = action.payload;
    }
  }
})

export const {setPage} = pageSlice.actions;
export default pageSlice.reducer;