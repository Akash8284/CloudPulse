import axios from "axios";

const API = "http://localhost:5000/api/aws";

export const fetchEC2 = async () => {
    const res = await axios.get(`${API}/ec2`);
    return res.data;
};