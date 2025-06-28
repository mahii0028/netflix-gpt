import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showSearchGpt: true,
  },
  reducers: {
    toggleGptSeacrh: (state) => {
      state.showSearchGpt = !state.showSearchGpt;
    },
  },
});

export const { toggleGptSeacrh } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
