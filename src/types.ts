import type { LunarDate } from '@kabeep/lunar-date-fns';
import { type ANIMALS } from './constants';

export type ZodiacAnimal = (typeof ANIMALS)[number];

export type Zodiac = ZodiacAnimal & LunarDate & { from: Date; to: Date };
