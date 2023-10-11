import express from "express";

// import {requireSignIn} from "../Middlewares/authMiddleware.js"
import { applyForJobController, createJobController, deleteJobController, getAllJobController, getJobCategoryBasedController, jobSearchController, jobUpdateController, removeApplicationForJobController, singleJobPageController, totalJobApplicantsController } from "../Controllers/jobController.js";


const router = express.Router()

// Route for New job post
router.post("/create-job", createJobController);

// Route for Update an existing post
router.put("/update-job/:jobId",jobUpdateController);

// Route for delete a Job
router.delete("/delete-job/:jobId", deleteJobController);

// Route to get All Jobs
router.get("/get-jobs", getAllJobController);

// Route to get total applicants for the job
router.get("/populate-applicants/:jobId", totalJobApplicantsController);

// Route to apply for Job
router.put("/apply-for-job/:jobId", applyForJobController);

//Route for remove Application
router.put("/remove-job-application/:jobId",  removeApplicationForJobController);

// jobs based on category (pass the category as slug from the client)
router.get("/get-category/:category", getJobCategoryBasedController)

// single job page
router.get("/single-job/:jobId", singleJobPageController);

//job serach
router.get("/search-jobs", jobSearchController)


export default router;