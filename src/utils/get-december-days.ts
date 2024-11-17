import { getLeapMonthDays, getMonthDays } from '@kabeep/lunar-date-fns';

/**
 * Returns the number of days in December of a lunar year
 * @param {number} year - lunar year
 * @param {boolean} isLeap - whether the year has a leap month
 * @returns {number} Days in December of the lunar year
 *
 * @example
 * // => 29
 * getDecemberDays(2024, false)
 *
 * @example
 * // => 29
 * getDecemberDays(2025, true)
 */
function getDecemberDays(year: number, isLeap: boolean): number {
    return isLeap ? getLeapMonthDays(year) : getMonthDays(year, 12);
}

export default getDecemberDays;
