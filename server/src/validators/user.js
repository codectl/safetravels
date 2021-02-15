import Joi from "joi";
import _ from "lodash";

import {ValidationError} from "../internals/errors";
import User from "../models/user";

// User validation
export const validate = async user => {
    const schema = Joi.object({
        displayName: Joi.string()
            .allow(null)
            .default(null)
            .min(3)
            .max(30),
        username: Joi.string()
            .allow(null)
            .default(null)
            .alphanum()
            .min(3)
            .max(20)
            .regex(/^[a-zA-Z0-9_]+$/),
        email: Joi.string()
            .required()
            .email(),
        password: Joi.string()
            .required()
            .min(6)
            .max(20),
        confirmPassword: Joi.string()
            .valid(Joi.ref("password"))
            .options({messages: {"any.only": "passwords must match"}})
    })
        .with("password", "confirmPassword");

    // Schema validation
    let {error} = schema.validate(user, {
        abortEarly: false,
        messages: {
            "any.required": "required",
            "string.email": "invalid email"
        }
    });

    if (error)
        throw new ValidationError(error.message, error);

    let duplicates = {};

    // Check for duplicate username
    if (await User.exists({username: user.username}))
        duplicates.username = "username already taken";

    // Check for duplicate email
    if (await User.exists({email: user.email}))
        duplicates.email = "email already in use";

    // Throw err if any duplicate

    if (!_.isEmpty(duplicates))
        throw new ValidationError("Duplicate value found for a unique field.", duplicates);
};
