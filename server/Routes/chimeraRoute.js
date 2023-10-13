import express from "express";
import { registerEmployeeController } from "../Controllers/userController.js";
import { loginController } from "../Controllers/loginController.js";
import { registerAdminController } from "../Controllers/adminController.js";


const router = express.Router();



// Register new employee account
router.post("/register", registerEmployeeController);
// Login for Employee
router.post("/login", loginController);
//Register for Admin
router.post("/registeradmin",registerAdminController)


export default router;
