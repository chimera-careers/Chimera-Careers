import express from "express";
import { registerEmployeeController } from "../Controllers/userController.js";
import { loginController } from "../Controllers/loginController.js";


const router = express.Router();



// Register new employee account
router.post("/register", registerEmployeeController);
// Login for Employee
router.post("/login", loginController);



export default router;
