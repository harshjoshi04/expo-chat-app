export function generateOtp() {
  // Generate a 4-digit OTP
  const otp = Math.floor(1000 + Math.random() * 9000); // Generates a number between 1000 and 9999
  return otp;
}

export function isStringEmptyOrNull(input) {
  return input === undefined || input === null || input === "";
}

export function isObjectEmptyOrNull(input) {
  return (
    input === undefined ||
    input === null ||
    (typeof input === "object" && Object.keys(input).length === 0)
  );
}
