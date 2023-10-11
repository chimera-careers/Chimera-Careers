import express from "express";

// import {requireSignIn} from "../Middlewares/authMiddleware.js"
import { createJobController, jobUpdateController } from "../Controllers/jobController.js";


const router = express.Router()


router.post("/create-job", createJobController);

router.put("/update-job/:jobId",jobUpdateController);



export default router;