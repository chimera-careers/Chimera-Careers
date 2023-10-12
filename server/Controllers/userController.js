import { Employee } from "../Models/userModel.js";
import { hashPassword } from "../Helpers/hashPassword.js";

// Creating new account

export const registerEmployeeController = async (req, res) => {
  try {
    const { name, email, wpnum, password, education } = req.body;
    const isEmployeeEmailExist = await Employee.findOne({ email });

    const lowerCaseEmail = email.toLowerCase();

    if (isEmployeeEmailExist) {
      return res.send({ success: false, message: "Email is already in use" });
    }

    const hashedPassword = await hashPassword(password);
    const newEmployee = await new Employee({
      name,
      email: lowerCaseEmail,
      wpnum,
      password: hashedPassword,
      education,
    }).save();

    res.send({
      newEmployee,
      success: true,
      message: "Employee Account created successfully",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error registering Employee" });
  }
};
