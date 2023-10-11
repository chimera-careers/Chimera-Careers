import { Employee } from "../Models/userModel.js";
import slugify from "slugify";
import { Job } from "../Models/jobModel.js";

// Post Job
export const createJobController = async (req, res) => {
  const { title, description, location, salary, workExperience, category } =
    req.body;

  if (!title || !description || !location || !workExperience || !category) {
    return res.send({ success: false, message: "Fill in all required inputs" });
  }

  const slugCategory = slugify(category);
  try {
    const savedJob = await new Job({
      title,
      description,
      location,
      salary,
      category,
      workExperience,
      slugCategory,
    }).save();
    res.send({ success: true, savedJob, message: "Job added successfully" });
  } catch (error) {
    console.error("Error saving job:", error);
    console.log(error);
    res.status(500).send({ success: false, message: "Error saving job" });
  }
};

// Update the job 
export const jobUpdateController = async (req, res) => {
    const { jobId } = req.params;
    const { title, description, salary, location, category } = req.body;

    const slugCategory = slugify(category)
    try {
        const updatedJob = await Job.findByIdAndUpdate(
            jobId,
            { title, salary, description, location, category, slugCategory },
            { new: true }
        );
        if (!updatedJob) {
            return res.status(404).json({ success: false, message: "Unable to Update" });
        }
        res.send({ updatedJob, success: true, message: "Job updated succesfully" });

    } catch (error) {
        console.error("Error updating job:", error);
        res.status(500).json({ success: false, message: "Error updating job" });
    }
}

// Delete Job

export const deleteJobController = async (req, res) => {
    const { jobId } = req.params;
    try {
        const deleteJob = await Job.findByIdAndDelete(jobId)

        if (!deleteJob) {
            return res.status(404).json({ success: false, message: "Unable to delete " });
        }
        res.status(200).json({ success: true, message: "Deleted Successfully" });
    } catch (error) {
        console.error("Error Deleting job:", error);
        res.status(500).json({ success: false, message: "Error Deleting job" });
    }
}

// Get all Jobs

export const getAllJobController = async (req, res) => {
    try {

        const jobs = await Job.find()
        res.status(200).send({ jobs, success: true, message: "Fetched all jobs by single company succesfully" })
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, message: "error while fetching job posts for single company" })
    }
}

// total applicants for the job
export const totalJobApplicantsController = async (req, res) => {
    try {
        const { jobId } = req.params
        const jobs = await Job.findById(jobId).populate("applicants")
        res.send(jobs);
    } catch (error) {
        console.error("Error saving job:", error);
        res.status(500).send("Error saving job");
    }
}

// Apply for Job
export const applyForJobController = async (req, res) => {
    const userId = req.user._id;
    const { jobId } = req.params;

    try {
        const job = await Job.findOneAndUpdate(
            { _id: jobId },
            { $addToSet: { applicants: userId } },
            { new: true }
        );
        const employee = await Employee.findByIdAndUpdate(
            userId,
            { $addToSet: { appliedJobs: jobId } },
            { new: true }
        );
        res.send({
            success: true,
            message: "Applied for the job successfully",
            job,
        });
    } catch (error) {
        console.error(error);
        res.send({
            success: false,
            message: "Error in applying for the job",
        });
    }
};

// Remove Application
export const removeApplicationForJobController = async (req, res) => {
    const userId = req.user._id;
    const { jobId } = req.params;

    try {
        const job = await Job.findByIdAndUpdate(
            jobId,
            { $pull: { applicants: userId } },
            { new: true }
        );
        const employee = await Employee.findByIdAndUpdate(
            userId,
            { $pull: { appliedJobs: jobId } },
            { new: true }
        );
        res.send({
            success: true,
            message: "Removed application for the job successfully",
            job,
        });
    } catch (error) {
        console.error(error);
        res.send({
            success: false,
            message: "Error in removing application for the job",
        });
    }
};

// Job Category based Listing

export const getJobCategoryBasedController = async (req, res) => {
    const { category } = req.params
    const slugCategory = slugify(category)
    try {
        const catBasedJobs = await Job.find({ slugCategory })
        res.send({ catBasedJobs, message: "fetched job based on category" })
    } catch (error) {
        console.log(error)
        res.send({ message: "Error in getting categorized job" });
    }
}