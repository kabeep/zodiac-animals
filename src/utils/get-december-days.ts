import { getLeapMonthDays, getMonthDays } from '@kabeep/lunar-date-fns';

function getDecemberDays(year: number, isLeap: boolean) {
    return isLeap ? getLeapMonthDays(year) : getMonthDays(year, 12);
}

export default getDecemberDays;
