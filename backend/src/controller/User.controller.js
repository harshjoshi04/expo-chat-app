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

export const VerifyOTP = asyncErrorHandler(async (req, res, next) => {
  const { email, otp } = req.body;
  if (isStringEmptyOrNull(email) || isStringEmptyOrNull(otp)) {
    next(createHttpError(404, "Please enter required field !"));
  }
  const isUserExits = await UserModel.findOne({ email });
  if (isObjectEmptyOrNull(isUserExits)) {
    next(createHttpError(404, "User Not Found !"));
  }
  if (isUserExits.OTP !== otp) {
    next(createHttpError(404, "Invalid OTP !"));
  }
  res.json({ message: "User verify successfully !" });
});

export const UpdateUserDetails = asyncErrorHandler(async (req, res, next) => {
  const { email, userName } = req.body;
  if (isStringEmptyOrNull(userName) || isStringEmptyOrNull(email)) {
    next(createHttpError(404, "user name or email is not found !"));
  }
  const imagePath = req.file.filename;

  await UserModel.findOneAndUpdate(
    { email },
    { $set: { userName, image: imagePath } }
  );

  res.json({ message: "User upate successfully !" });
});
