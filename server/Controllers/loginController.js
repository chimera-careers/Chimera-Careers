import { Employee } from "../Models/userModel.js";
import { comparePassword } from "../Helpers/hashPassword.js";
import JWT from "jsonwebtoken";

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user;

    const lowerCaseEmail = email.toLowerCase();

    const employee = await Employee.findOne({ email: lowerCaseEmail });

    if (employee) {
      user = employee;
    } else {
      return res.send({ success: false, message: "User not found" });
    }
    const matchPassword = comparePassword(password, user.password);
    if (!matchPassword) {
      return res.send("Enter valid credentials");
    }
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5d",
    });

    res.status(200).send({
      success: true,
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        userId: user._id,
        token: token,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred in login session");
  }
};
