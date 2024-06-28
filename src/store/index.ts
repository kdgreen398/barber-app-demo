import { configureStore } from "@reduxjs/toolkit";
import { AppReducer } from "./slices/app";
import { LocationReducer } from "./slices/location";
import { SearchReducer } from "./slices/search";
// import { AppointmentScreenReducer } from "../containers/appointments-screen/slice.ts";
// import { AppointmentDetailReducer } from "../containers/appointment-details/slice.ts";
// import { ProfileScreenReducer } from "../containers/profile-screen/slice.ts";
// import { ProfileEditScreenReducer } from "../containers/profile-edit-screen/slice.ts";
// import { ReviewFormReducer } from "../containers/review-form/slice.ts";
// import { LocationScreenReducer } from "../containers/location-screen/slice.ts";

export interface RootState {
  app: ReturnType<typeof AppReducer>;
  location: ReturnType<typeof LocationReducer>;
  search: ReturnType<typeof SearchReducer>;
  // profileScreen: ReturnType<typeof ProfileScreenReducer>;
  // profileEditScreen: ReturnType<typeof ProfileEditScreenReducer>;
  // appointmentScreen: ReturnType<typeof AppointmentScreenReducer>;
  // appointmentDetail: ReturnType<typeof AppointmentDetailReducer>;
  // reviewForm: ReturnType<typeof ReviewFormReducer>;
  // locationScreen: ReturnType<typeof LocationScreenReducer>;
}

export default configureStore({
  reducer: {
    app: AppReducer,
    location: LocationReducer,
    search: SearchReducer,
    // profileScreen: ProfileScreenReducer,
    // profileEditScreen: ProfileEditScreenReducer,
    // appointmentScreen: AppointmentScreenReducer,
    // appointmentDetail: AppointmentDetailReducer,
    // reviewForm: ReviewFormReducer,
    // locationScreen: LocationScreenReducer,
  },
});
