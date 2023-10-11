import express from "express";
import { registerEmployeeController } from "../Controllers/userController.js";
import { loginController } from "../Controllers/loginController.js";
// Import any necessary middleware here

const router = express.Router();

// You can add middleware here if needed.
// Example:
// router.use(requireSignIn);

// Register new employee account
router.post("/register", registerEmployeeController);
router.post("/login", loginController);

export default router;
