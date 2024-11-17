import { type Assertion, describe, expect, it } from 'vitest';
import { ANIMALS, zodiac } from '../src';

type Options = { input: Date; expected: any; validator: keyof Assertion };
const expectFunction = (input?: unknown): Assertion => expect(zodiac(input as Date));

const testFunction = ({ input, expected, validator }: Options) => {
    (expectFunction(input)[validator] as (expected: any) => {})(expected);
};

const createTest =
    (...cases: Options[]) =>
    () => {
        it.each(cases)('$input -> $expected.name zodiac', testFunction);
    };

describe(
    'Unit Testing',
    createTest({
        input: new Date(1997, 4, 8),
        expected: {
            ...ANIMALS[1],
            year: 1997,
            month: 4,
            day: 2,
            isLeapMonth: false,
            from: new Date(1997, 1, 7),
            to: new Date(1998, 0, 27),
        },
        validator: 'toStrictEqual',
    }),
);

describe(
    'Integration Testing',
    createTest(
        { input: new Date('2020-10-01'), expected: ANIMALS[0], validator: 'toMatchObject' },
        { input: new Date('2021-10-01'), expected: ANIMALS[1], validator: 'toMatchObject' },
        { input: new Date('2022-10-01'), expected: ANIMALS[2], validator: 'toMatchObject' },
        { input: new Date('2023-10-01'), expected: ANIMALS[3], validator: 'toMatchObject' },
        { input: new Date('2024-10-01'), expected: ANIMALS[4], validator: 'toMatchObject' },
        { input: new Date('2025-10-01'), expected: ANIMALS[5], validator: 'toMatchObject' },
        { input: new Date('2026-10-01'), expected: ANIMALS[6], validator: 'toMatchObject' },
        { input: new Date('2027-10-01'), expected: ANIMALS[7], validator: 'toMatchObject' },
        { input: new Date('2028-10-01'), expected: ANIMALS[8], validator: 'toMatchObject' },
        { input: new Date('2029-10-01'), expected: ANIMALS[9], validator: 'toMatchObject' },
        { input: new Date('2030-10-01'), expected: ANIMALS[10], validator: 'toMatchObject' },
        { input: new Date('2031-10-01'), expected: ANIMALS[11], validator: 'toMatchObject' },
    ),
);

describe(
    'Exception Case',
    createTest(
        { input: new Date(NaN), expected: -1, validator: 'toBe' },
        { input: new Date(new Date('1900-01-30')), expected: -1, validator: 'toBe' },
        { input: new Date('2101-01-01'), expected: -1, validator: 'toBe' },
    ),
);
