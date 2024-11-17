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
    'return Zodiac object if the given Date is valid',
    createTest(
        {
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
        },
        {
            input: new Date(1997, 4, 8),
            expected: ANIMALS[1],
            validator: 'toMatchObject',
        },
        {
            input: new Date(NaN),
            expected: -1,
            validator: 'toBe',
        },
    ),
);
