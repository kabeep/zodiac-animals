import type { LunarDate } from '@kabeep/lunar-date-fns';
import { type ANIMALS } from './constants';

/**
 * Zodiac Animal Record
 */
export type ZodiacAnimal = (typeof ANIMALS)[number];

/**
 * Zodiac Animal Name
 */
export type ZodiacAnimalName = ZodiacAnimal['name'];

/**
 * Zodiac Output Object
 */
export type Zodiac = ZodiacAnimal & LunarDate & { from: Date; to: Date };
