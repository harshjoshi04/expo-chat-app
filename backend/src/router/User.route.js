import { Router } from "express";
import {
  SendOTPFromMail,
  UpdateUserDetails,
  VerifyOTP,
} from "../controller/User.controller.js";
import upload from "../utils/uploadImage.js";

const router = Router();

router.post("/send-otp", SendOTPFromMail);
router.post("/verify-otp", VerifyOTP);

router.put("/", upload.single("image"), UpdateUserDetails);
export default router;
