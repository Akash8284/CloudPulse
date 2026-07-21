import { getDashboardData } from "../services/dashboardService.js";

export const fetchDashboard = async (req, res) => {
    try {
        const dashboard = await getDashboardData();
        res.json(dashboard);
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
        });
    }
};