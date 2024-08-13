import yup from "yup"
import passwordValidation from "./passwordValidation.js";

export const registerValidation = yup.object().shape({
  username: yup.string().min(3).max(15).required(),
  firstName: yup.string().min(3).max(15).required(),
  lastName: yup.string().min(1).max(15).required(),
  email: yup.string().email().required(),
  password: passwordValidation,
});

