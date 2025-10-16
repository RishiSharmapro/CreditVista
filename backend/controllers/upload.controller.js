import parseCreditReport from "../utils/parser.js";
import { CreditReport } from "../models/creditReport.models.js";

const handleFileUpload = async (req, res) => {
    try {
        const xmlFile = req.file.path;
        const jsonData = await parseCreditReport(xmlFile);

        const creditReport = new CreditReport(jsonData);
        await creditReport.save();

        res.status(200).json(jsonData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { handleFileUpload };