// utils/validate.js
import Joi from "joi";

// Validation schema for signup and signin forms
export const LoginSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).allow("", null), // Allow empty string or null for name
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});
