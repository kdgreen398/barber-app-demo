import axios from "../axios";

export const fetchServerStatus = async () => {
  const response = await axios.get("/common/server-status");
  return response.data.payload;
};
