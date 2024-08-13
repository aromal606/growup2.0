import  {registerValidation}  from "../../utilities/validationSchema/registerValidation.js";

 export const validateRegistration = async (req, res, next) => {
  try {
    
    await registerValidation.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    console.log(error); 
    
    return res.status(400).json({ errors: error.errors });
  }
};

