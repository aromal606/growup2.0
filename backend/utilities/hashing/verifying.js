// import { verify } from "argon2";
import { verify } from "argon2";

const verifyData = async (actualData, encryptedData) => {
  try {
    return await verify(encryptedData, actualData);
  } catch (error) {
    throw new Error("Mismatch or verification failed: " + error.message);
  }
};

export default {verifyData};
