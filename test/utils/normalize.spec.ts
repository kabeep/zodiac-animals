import { expect, it } from 'vitest';
import { normalize } from '../../src/utils';

it('should return Original Date if the given value is Date', () => {
    const input = new Date();
    expect(normalize(input)).toStrictEqual(input);
});

it('should return Invalid Date if the given value is -1', () => {
    const expected = new Date(Number.NaN);
    expect(normalize(-1)).toStrictEqual(expected);
});
