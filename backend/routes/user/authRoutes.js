import express from "express";

import { loginController, registerController, verifyEmail } from "../../controllers/user/authController.js";
import { validateLogin, validateRegistration } from "../../middlewares/user/validationMidleware.js";


const router = express.Router();

router.post('/register',validateRegistration,registerController);
router.post('/login', validateLogin,loginController)
router.get('/verify-email/:token', verifyEmail);

export default router