import yup from "yup"

 const passwordValidation = yup.string()
  .min(6, 'Password must be at least 6 characters')
  .matches(/[a-zA-Z]/, 'Password must include at least one letter')
  .matches(/[0-9]/, 'Password must include at least one number')
  .matches(/[\W_]/, 'Password must include at least one special character')
  .required('Password is required');

 export default passwordValidation