import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import {
  getAllUsers,
  getUserData_by_email
} from "../controllers/userController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);
router.get('/users/', getAllUsers);
router.post('/get-user-data-by-email/', getUserData_by_email);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;