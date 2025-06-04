import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(token_decode, process.env.ADMIN_EMAIL);

    if (token_decode.email !== process.env.ADMIN_EMAIL) {
      return res.json({
        success: false,
        message: "token not match",
      });
    }
    next();
  } catch (error) {
    return res.json({
      success: false,
      message: "Internal server error",
    });
  }
};

export default authAdmin;
