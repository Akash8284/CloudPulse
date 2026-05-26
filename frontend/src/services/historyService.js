import axios from "axios";

const API_URL =
  "http://localhost:5000/api/history";

export const fetchHistory = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};