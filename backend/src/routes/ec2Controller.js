import { getEC2Instances } from "../services/ec2Service.js";

export const fetchEC2 = async (req, res) => {
    try {
        const data = await getEC2Instances();
        res.json(data);
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};