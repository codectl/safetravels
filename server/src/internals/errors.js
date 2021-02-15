import _ from "lodash";

export class ValidationError extends Error {
    constructor(message, err) {
        super(message);
        this.name = "ValidationError";
        if (err instanceof Object) {
            // Normalize Joi error message details
            this.details = err.isJoi ? this.constructor.normalizeJoiErrorDetails(err) : err;
        }
    }

    /**
     * The error result should be under the form of {'field': 'error'}
     */
    static normalizeJoiErrorDetails(err) {
        return err ? _.mapValues(
            _.mapKeys(err.details, 'context.key'),
            'message') : null;
    }
}
