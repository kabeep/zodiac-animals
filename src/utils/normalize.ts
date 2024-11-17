/**
 * Normalizes the input value to ensure it is a valid Date object
 * @param {Date | -1} value - Input value, either a Date object or -1
 * @returns {Date} A valid Date object or an invalid Date if the input is -1
 *
 * @example
 * // => Invalid Date
 * normalize(-1)
 *
 * @example
 * // => 2024-01-01T00:00:00.000Z
 * normalize(new Date('2024-01-01'))
 */
function normalize(value: Date | -1): Date {
    return value === -1 ? new Date(Number.NaN) : value;
}

export default normalize;
