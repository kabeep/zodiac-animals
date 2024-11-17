import { expect, it } from 'vitest';
import { getDecemberDays } from '../../src/utils';

it('should return days if the given value is lunar leap month', () => {
    expect(getDecemberDays(2025, true)).toStrictEqual(29);
});

it('should return days if the given value is lunar non-leap month', () => {
    expect(getDecemberDays(2024, false)).toStrictEqual(29);
});
