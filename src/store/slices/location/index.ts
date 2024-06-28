import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PermissionStatus } from "expo-location";
import { LocationObject } from "../../../shared/types";
import { LocationStateType } from "./types";

const initialState: LocationStateType = {
  locationPermissionStatus: PermissionStatus.UNDETERMINED,
  latitude: undefined,
  longitude: undefined,
  city: undefined,
  state: undefined,
  isLocationPromptOpen: false,
};

export const LocationSlice = createSlice({
  name: "Location",
  initialState,
  reducers: {
    setLocationPermissionStatus: (
      state,
      action: PayloadAction<PermissionStatus>,
    ) => {
      state.locationPermissionStatus = action.payload;
    },
    setIsLocationPromptOpen: (state, action: PayloadAction<boolean>) => {
      state.isLocationPromptOpen = action.payload;
    },
    setLocation: (state, action: PayloadAction<LocationObject>) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.city = action.payload.city;
      state.state = action.payload.state;
    },
  },
});
export const LocationActions = LocationSlice.actions;
export const LocationReducer = LocationSlice.reducer;
