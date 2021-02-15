/**
 * Append url path to a base URL.
 * @param base the URL base
 * @param path the path to append
 * @returns {string} the appended path
 */
export const joinURL = (base, path) => {
    return base.charAt(base.length - 1) === '/'
        ? base + path
        : base + '/' + path
}
