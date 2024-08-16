import yup from "yup"

export const loginValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string()
  .min(6, 'Password must be at least 6 characters')
  .required('Password is required')
});

