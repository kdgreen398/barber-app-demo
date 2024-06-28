import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState, SnackbarType } from "./types";

const initialState: AppState = {
  snackbar: {
    message: null,
    visible: false,
    duration: 5000,
  },
  isLoading: false,
  isAuthenticationModalOpen: false,
};

export const AppSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    setIsAuthenticationModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticationModalOpen = action.payload;
    },
    setSnackbar: (state, action: PayloadAction<Partial<SnackbarType>>) => {
      state.snackbar = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});
export const AppActions = AppSlice.actions;
export const AppReducer = AppSlice.reducer;
