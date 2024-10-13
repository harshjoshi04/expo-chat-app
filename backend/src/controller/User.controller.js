import createHttpError from "http-errors";
import asyncErrorHandler from "../utils/AyncHandler.js";
import UserModel from "../model/user.model.js";
import {
  generateOtp,
  isObjectEmptyOrNull,
  isStringEmptyOrNull,
} from "../utils/shared.js";
import { sendOtpEmail } from "../utils/sendMail.js";

export const SendOTPFromMail = asyncErrorHandler(async (req, res, next) => {
  const { email } = req.body;
  if (isStringEmptyOrNull(email)) {
    next(createHttpError(404, "Email Not Found"));
  }
  const isUserExits = await UserModel.findOne({ email });
  const otp = generateOtp();
  await sendOtpEmail(email, otp);
  if (isObjectEmptyOrNull(isUserExits)) {
    await UserModel.create({ email, OTP: otp });
  } else {
    await UserModel.findOneAndUpdate({ email }, { OTP: otp });
  }
  res.json({ message: "Otp Send Successfully !" });
});
