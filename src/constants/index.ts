// eslint-disable-next-line @typescript-eslint/naming-convention
export const ANIMALS = [
    {
        name: 'rat',
        mate: ['dragon', 'monkey'],
        traits: ['Intelligent', 'Adaptable', 'Quick-witted', 'Charming', 'Artistic', 'Sociable'],
    },
    {
        name: 'ox',
        mate: ['snake', 'rooster'],
        traits: ['Loyal', 'Reliable', 'Thorough', 'Strong', 'Reasonable', 'Steady', 'Determined'],
    },
    {
        name: 'tiger',
        mate: ['horse', 'dog'],
        traits: ['Enthusiastic', 'Courageous', 'Ambitious', 'Leadership', 'Confidence', 'Charismatic'],
    },
    {
        name: 'rabbit',
        mate: ['sheep', 'pig'],
        traits: ['Trustworthy', 'Empathic', 'Modest', 'Diplomatic', 'Sincere', 'Sociable', 'Caretakers'],
        alias: 'cat', // Vietnamese
    },
    {
        name: 'dragon',
        mate: ['rat', 'monkey'],
        traits: ['Lucky', 'Flexible', 'Eccentric', 'Imaginative', 'Artistic', 'Spiritual', 'Charismatic'],
    },
    {
        name: 'snake',
        mate: ['ox', 'rooster'],
        traits: ['Philosophical', 'Organized', 'Intelligent', 'Intuitive', 'Elegant', 'Attentive', 'Decisive'],
    },
    {
        name: 'horse',
        mate: ['tiger', 'dog'],
        traits: ['Adaptable', 'Loyal', 'Courageous', 'Ambitious', 'Intelligent', 'Adventurous', 'Strong'],
    },
    {
        name: 'sheep',
        mate: ['rabbit', 'pig'],
        traits: ['Tasteful', 'Crafty', 'Warm', 'Elegant', 'Charming', 'Intuitive', 'Sensitive', 'Calm'],
    },
    {
        name: 'monkey',
        mate: ['dragon', 'monkey'],
        traits: ['Quick-witted', 'Charming', 'Lucky', 'Adaptable', 'Bright', 'Versatile', 'Lively', 'Smart'],
    },
    {
        name: 'rooster',
        mate: ['ox', 'snake'],
        traits: ['Honest', 'Energetic', 'Intelligent', 'Flamboyant', 'Flexible', 'Diverse', 'Confident'],
    },
    {
        name: 'dog',
        mate: ['tiger', 'horse'],
        trait: ['Loyal', 'Sociable', 'Courageous', 'Diligent', 'Steady', 'Lively', 'Adaptable', 'Smart'],
    },
    {
        name: 'pig',
        mate: ['rabbit', 'sheep'],
        traits: ['Honorable', 'Philanthropic', 'Determined', 'Optimistic', 'Sincere', 'Sociable'],
    },
] as const;
