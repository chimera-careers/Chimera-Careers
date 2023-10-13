import { Admin } from "../Models/adminModel.js";
import { comparePassword } from "../Helpers/hashPassword.js";
import JWT from "jsonwebtoken";

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

// Admin Signin

export const adminLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    let chimera;

    const lowerCaseEmail = email.toLowerCase();

    const admin = await Admin.findOne({ email: lowerCaseEmail });

    if (admin) {
      chimera = admin;
    } else {
      return res.send({ success: false, message: "Admin not found" });
    }
    const matchPassword = comparePassword(password, chimera.password);
    if (!matchPassword) {
      return res.send("Enter valid credentials");
    }
    const token = JWT.sign({ _id: chimera._id }, process.env.JWT_SECRET, {
      expiresIn: "5d",
    });

    res.status(200).send({
      success: true,
      message: "Login successful",
      chimera: {
        name: chimera.name,
        email: chimera.email,
        chimeraId: chimera._id,
        token: token,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred in login session");
  }
};
