import { Admin } from "../Models/adminModel.js";
import { hashPassword } from "../Helpers/hashPassword.js";

// Creating new account for Admin

export const registerAdminController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isAdminEmailExist = await Admin.findOne({ email });

    const lowerCaseEmail = email.toLowerCase();

    if (isAdminEmailExist) {
      return res.send({ success: false, message: "Email is already in use" });
    }

    const hashedPassword = await hashPassword(password);
    const newAdmin = await new Admin({
      name,
      email: lowerCaseEmail,

      password: hashedPassword,
    }).save();

    res.send({
      newAdmin,
      success: true,
      message: "Admin Account created successfully",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error registering Admin" });
  }
};
