import { Router } from "express";
import { SendOTPFromMail } from "../controller/User.controller.js";

const router = Router();

router.post("/send-otp", SendOTPFromMail);

export default router;
