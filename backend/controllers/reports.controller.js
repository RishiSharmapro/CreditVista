import { CreditReport } from "../models/creditReport.models.js";

const handleReports = async (req, res) => {
    try {
        const reports = await CreditReport.find();
        res.status(200).json(reports);
    } catch (error) {
        console.error("Error fetching reports:", error);
        res.status(500).json({ message: "Internal Server Errorrrrr" });
    }
}

export { handleReports };