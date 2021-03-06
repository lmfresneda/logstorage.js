/**
 * Each log
 */
export declare class LoggerageObject {
    /**
     * App or logger name
     * @type {string}
     */
    app: string;
    /**
     * App or logger version
     * @type {number|string}
     */
    version: number | string;
    /**
     * Timestamp of date log
     * @type {number}
     */
    timestamp: number;
    /**
     * Date log
     * @type {string}
     */
    date: string;
    /**
     * String level log, like INFO, ERROR, etc...
     * @type {string}
     */
    level: string;
    /**
     * Number level log, like 3 for INFO, 4 for ERROR, etc..
     * @type {string}
     */
    level_number: number;
    /**
     * Message log
     * @type {string}
     */
    message: string;
    /**
     * Constructor
     * @param {string} _level
     * @param {string} _message
     * @param {string} _app     Optional
     */
    constructor(_level: string, _message: string, _app?: string, _version?: number | string);
}
