/**
 * The data comes from `davisnatalie`
 * @source
 * @see [zodiacAnimals2]{@link https://github.com/davisnatalie/zodiacAnimals2/blob/main/js/zodiac-animals-data.js}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ANIMALS = [
    {
        name: 'rat',
        mate: ['ox', 'dragon', 'monkey'],
        traits: ['Intelligent', 'Adaptable', 'Quick-witted', 'Charming', 'Artistic', 'Sociable'],
    },
    {
        name: 'ox',
        mate: ['rat', 'snake', 'rooster'],
        traits: ['Loyal', 'Reliable', 'Thorough', 'Strong', 'Reasonable', 'Steady', 'Determined'],
    },
    {
        name: 'tiger',
        mate: ['dragon', 'horse', 'dog'],
        traits: ['Enthusiastic', 'Courageous', 'Ambitious', 'Leadership', 'Confidence', 'Charismatic'],
    },
    {
        name: 'rabbit',
        mate: ['sheep', 'monkey', 'dog', 'pig'],
        traits: ['Trustworthy', 'Empathic', 'Modest', 'Diplomatic', 'Sincere', 'Sociable', 'Caretakers'],
        alias: 'cat', // Vietnamese
    },
    {
        name: 'dragon',
        mate: ['rooster', 'rat', 'monkey'],
        traits: ['Lucky', 'Flexible', 'Eccentric', 'Imaginative', 'Artistic', 'Spiritual', 'Charismatic'],
    },
    {
        name: 'snake',
        mate: ['dragon', 'rooster'],
        traits: ['Philosophical', 'Organized', 'Intelligent', 'Intuitive', 'Elegant', 'Attentive', 'Decisive'],
    },
    {
        name: 'horse',
        mate: ['tiger', 'sheep', 'rabbit'],
        traits: ['Adaptable', 'Loyal', 'Courageous', 'Ambitious', 'Intelligent', 'Adventurous', 'Strong'],
    },
    {
        name: 'sheep',
        mate: ['rabbit', 'horse', 'pig'],
        traits: ['Tasteful', 'Crafty', 'Warm', 'Elegant', 'Charming', 'Intuitive', 'Sensitive', 'Calm'],
    },
    {
        name: 'monkey',
        mate: ['ox', 'rabbit'],
        traits: ['Quick-witted', 'Charming', 'Lucky', 'Adaptable', 'Bright', 'Versatile', 'Lively', 'Smart'],
    },
    {
        name: 'rooster',
        mate: ['ox', 'snake'],
        traits: ['Honest', 'Energetic', 'Intelligent', 'Flamboyant', 'Flexible', 'Diverse', 'Confident'],
    },
    {
        name: 'dog',
        mate: ['rabbit', 'tiger'],
        traits: ['Loyal', 'Sociable', 'Courageous', 'Diligent', 'Steady', 'Lively', 'Adaptable', 'Smart'],
    },
    {
        name: 'pig',
        mate: ['tiger', 'rabbit', 'sheep'],
        traits: ['Honorable', 'Philanthropic', 'Determined', 'Optimistic', 'Sincere', 'Sociable'],
    },
] as const;
