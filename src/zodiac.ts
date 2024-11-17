import { getLeapMonth, toLunar, toSolar } from '@kabeep/lunar-date-fns';
import { ANIMALS } from './constants';
import type { Zodiac } from './types';
import { getDecemberDays, normalize } from './utils';

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
