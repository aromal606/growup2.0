import jwt from "jsonwebtoken";

export const token = (id) => {
  return jwt.sign(
    {
      jwtId: id,
    },
    process.env.JWT_KEY,
    { expiresIn: "2min" }
  );
};
