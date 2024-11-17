import { getLeapMonth, toLunar, toSolar } from '@kabeep/lunar-date-fns';
import { ANIMALS } from './constants';
import type { Zodiac } from './types';
import { getDecemberDays, normalize } from './utils';

/**
 * Determines the zodiac information for a given Gregorian date
 * @param {Date} date - A Gregorian date
 * @returns {Zodiac | -1} Zodiac information or -1 if the date cannot be converted to a lunar date
 *
 * @example
 * // => {
 * //    name: 'ox',
 * //    mate: [ 'snake', 'rooster' ],
 * //    traits: ['Loyal','Reliable','Thorough','Strong','Reasonable','Steady','Determined'],
 * //    year: 1997,
 * //    month: 3,
 * //    day: 10,
 * //    isLeapMonth: false,
 * //    from: 1997-02-06T16:00:00.000Z,
 * //    to: 1998-01-26T16:00:00.000
 * // }
 * zodiac(new Date(1997, 4, 8))
 *
 * @example
 * // => -1
 * zodiac(new Date('1899-12-31'))
 */
function zodiac(date: Date): Zodiac | -1 {
    const lunarDate = toLunar(date);
    if (lunarDate === -1) return -1;

    const { year } = lunarDate;
    const record = ANIMALS[(year - 4) % 12];

    const leapMonth = getLeapMonth(year);
    const isLastLeapMonth = leapMonth === 12;
    const from = normalize(toSolar({ year, month: 1, day: 1, isLeapMonth: leapMonth === 1 }));
    const to = normalize(
        toSolar({
            year,
            month: 12,
            day: getDecemberDays(year, isLastLeapMonth),
            isLeapMonth: isLastLeapMonth,
        }),
    );

    return { ...record, ...lunarDate, from, to };
}

export default zodiac;
