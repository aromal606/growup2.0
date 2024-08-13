import express from "express";

import { registerController } from "../../controllers/user/authController.js";
import { validateRegistration } from "../../middlewares/user/validationMidleware.js";


const router = express.Router();

router.post('/register',validateRegistration,registerController);

export default router