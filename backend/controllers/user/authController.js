import encryptedData from "../../utilities/hashing/encrypting.js";
import user from "../../models/userModel/userModel.js";



// register controller -------

export const registerController = async (req, res, next) => {
  try {
    const { username, firstName, lastName, email, password } = req.body;
    const existUser = await user.findOne({ email });
    if (existUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    
    const hashedPassword = await encryptedData(password);

    const newUser = new user({
      username,
      firstName,
      lastName,  
      email,
      password: hashedPassword,
    });  
    await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// login controller -------

export const loginController = async (req,res,next)=>{

  const {email, password} = req.body
  try {
    const existingUser = await user.findOne({email})
    


    
    
  } catch (error) {
    
  }
}