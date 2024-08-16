import encryptedData from "../../utilities/hashing/encrypting.js";
import user from "../../models/userModel/userModel.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { token } from "../../utilities/jwt/tokenGenerator.js";
import { sendVerificationEmail } from "../../utilities/emailServices/emailConfig.js";

dotenv.config();

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
    const jwtId = jwt.sign(
      {
        jwtId: newUser._id,
      },
      process.env.JWT_KEY,
      { expiresIn: "2min" }
    );

    sendVerificationEmail(newUser, jwtId);
    res.status(201).json({
      message: "User registered successfully plese check your email to verify",
      user: newUser,
    });
  

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// email varification------

export const verifyEmail = async (req, res) => {
  const { token } = req.params;
  try {
    const decript = jwt.verify(token, process.env.JWT_KEY);
    const verifyUser = await user.findByIdAndUpdate(
      decript.jwtId,
      { emailStatus: "verified" },
      { new: true }
    );
    if (!verifyUser) {
      return res.status(401).json({
        message: "Token may have expired, or you are no longer registered. Please register again.",
      });
    }
    res.status(200).json({ message: "Email verified successfully." });
  } catch (error) {
    console.error("Email verification error:", error);
    res.status(500).json({ message: "Internal server error. Please try again later." });
  }
};


// login controller -------

export const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "Email not found. Please check it!" });
    }

    const checkPassword = await argon2.verify(existingUser.password, password);
    if (!checkPassword) {
      return res.status(401).json({ message: "Password didn't match. Please check it!" });
    }

    if (!existingUser.emailStatus) {
      const jwtId = jwt.sign(
        {
          jwtId: existingUser._id,
        },
        process.env.JWT_KEY,
        { expiresIn: "2min" }
      );

      sendVerificationEmail(existingUser, jwtId);
      return res.status(201).json({
        message: "Resend email successfully. Please check your email to verify!",
        user: existingUser,
      });
    }

    const jwtId = token(existingUser._id);
    res.status(200).json({ message: "Login success", jwtId, user: existingUser });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error. Please try again later." });
  }
};

