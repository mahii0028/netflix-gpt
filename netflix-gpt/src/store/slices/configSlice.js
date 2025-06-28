import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    preferedLang: "kannada",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.preferedLang = action.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;
