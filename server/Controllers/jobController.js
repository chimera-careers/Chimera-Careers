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
