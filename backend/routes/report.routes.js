import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { handleFileUpload } from "../controllers/upload.controller.js";
import { handleReports } from "../controllers/reports.controller.js";

const router = Router();

router.post('/upload', upload.single('data'), handleFileUpload);
router.get('/reports', handleReports);

export default router;