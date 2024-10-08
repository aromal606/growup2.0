import { registerValidation } from "../../utilities/validationSchema/registerValidation.js";
import { loginValidation } from "../../utilities/validationSchema/loginValidation.js";
export const validateRegistration = async (req, res, next) => {
  try {
    await registerValidation.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    return res.status(400).json({ errors: error.errors });
  }
};
export const validateLogin = async (req, res, next) => {
  try {
    await loginValidation.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    return res.status(400).json({ errors: error.errors });
  }
};
