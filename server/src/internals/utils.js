import _ from "lodash";
import express from "express";

/**
 * Nullify undefined and empty values in a json object.
 * @param json to json object to transform
 * @returns {NumericDictionary<unknown>} the normalized object
 */
export const normalizeValues = json => _.mapValues(json, value => !value ? null : value);

/**
 * Check if some input is an email.
 * @param email the email to check
 * @returns {boolean} true is matches, false otherwise
 */
export const emailIsValid = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

/**
 * Get the app name.
 */
export const getAppName = () => require(process.cwd() + "/package.json").name;

/**
 * Get the app version.
 */
export const getAppVersion = () => require(process.cwd() + "/package.json").version;

/**
 * Get the user agent for this app 'name/version'.
 */
export const getUserAgent = () => getAppName() + "/" + getAppVersion();
