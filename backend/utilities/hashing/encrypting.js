// import { hash } from "argon2";
import argon2 from "argon2";

 const encryptedData = async (string) => {
  try {
    return await argon2.hash(string);
  } catch (error) {
    throw new Error("Encryption failed: " + error.message);
  }
};

export default encryptedData