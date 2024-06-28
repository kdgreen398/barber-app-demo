import axios from "axios";

// Create a custom Axios instance with default options
export default axios.create({
  baseURL: "https://barber-booking-app-401120.uc.r.appspot.com/api/v1",
  // baseURL: "http://localhost:3000/api/v1",
});
