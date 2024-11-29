<div align="center">

<h1>zodiac-animals</h1>

🐼 A JavaScript zodiac animals utility library

[![NodeJS][node-image]][node-url]
[![License][license-image]][license-url]
[![NPM][npm-image]][npm-url]
[![Codecov][codecov-image]][codecov-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![CircleCI][circleci-image]][circleci-url]

English | [简体中文][zh-cn-url]

![Insights][insights-url]

</div>

## 📖 Introduction

> Considering tree-shaking and the rigor required due to cultural differences,
> the output will exclude i18n content.

A lite utility library using Lunar Calendar.

See [documentation][docs-url].

## ⚙️ Installation

```bash
npm install @kabeep/zodiac-animals --save
```

```bash
yarn add @kabeep/zodiac-animals
```

```bash
pnpm add @kabeep/zodiac-animals
```

## 🚀 Usage

#### CommonJS

```typescript
const { ANIMALS, zodiac, Zodiac: IZodiac } = require('@kabeep/zodiac-animals');
```

#### ESModule

```typescript
import { ANIMALS, zodiac, type Zodiac } from '@kabeep/zodiac-animals';
```

---

#### Methods: `zodiac(date)`

```typescript
zodiac(new Date()) as Zodiac;
```

| Parameter | Type   | Optional | Default | Description                       |
|-----------|--------|:--------:|---------|-----------------------------------|
| `date`    | `Date` |    No    | -       | Date Object of Gregorian Calendar |

#### Returns: `interface Zodiac`

**Result Object:**

| Key           | Type       | Required  | Description                                                                                       |
|---------------|------------|:---------:|---------------------------------------------------------------------------------------------------|
| `name`        | `string`   |   true    | Zodiac Animal Name                                                                                |
| `mate`        | `string[]` |   true    | Zodiac Animal Mates                                                                               |
| `traits`      | `string[]` |   true    | Zodiac Animal Traits                                                                              |
| `alias`       | `string`   | **false** | Zodiac Animal i18n Alias                                                                          |
| `year`        | `number`   |   true    | Lunar Year of Date Input                                                                          |
| `month`       | `number`   |   true    | Lunar Month of Date Input                                                                         |
| `day`         | `number`   |   true    | Lunar Day of Date Input                                                                           |
| `isLeapMonth` | `boolean`  |   true    | Lunar Leap Month Flag of Date Input                                                               |
| `from`        | `Date`     |   true    | Gregorian Date of the First Day of the Lunar Year (Return an Invalid Date if an Exception Occurs) |
| `to`          | `Date`     |   true    | Gregorian Date of the Last Day of the Lunar Year (Return an Invalid Date if an Exception Occurs)  |

## 🔗 Related

- [lunar-date-fns][lunar-date-fns-url] - 🗓️ A JavaScript lunar date utility library.
- [lunar-birthday-cli][lunar-birthday-cli-url] - 🎂 A Node.js Library to list the lunar birthday in terminal.

## 🏅 Credits

- [zodiacAnimals2][credits-url] - Reference is made to data design of this repository.

## 🤝 Contribution

Contributions via Pull Requests or [Issues][issues-url] are welcome.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE][license-url] file for details.


[node-image]: https://img.shields.io/node/v/%40kabeep%2Fzodiac-animals?color=lightseagreen
[node-url]: https://nodejs.org/docs/latest/api/

[npm-image]: https://img.shields.io/npm/d18m/%40kabeep%2Fzodiac-animals?color=cornflowerblue
[npm-url]: https://www.npmjs.com/package/@kabeep/zodiac-animals

[codecov-image]: https://codecov.io/gh/kabeep/zodiac-animals/graph/badge.svg?token=SN18SFJw3N
[codecov-url]: https://codecov.io/gh/kabeep/zodiac-animals

[codacy-image]: https://app.codacy.com/project/badge/Grade/f9ecd4622c104d4eb0d6f1a5e289e8fe
[codacy-url]: https://app.codacy.com/gh/kabeep/zodiac-animals/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade

[circleci-image]: https://dl.circleci.com/status-badge/img/gh/kabeep/zodiac-animals/tree/master.svg?style=shield
[circleci-url]: https://dl.circleci.com/status-badge/redirect/gh/kabeep/zodiac-animals/tree/master

[insights-url]: https://repobeats.axiom.co/api/embed/587b7e5e404afd72869d684be271f8ca28f350ef.svg "Repobeats analytics image"

[docs-url]: https://kabeep.github.io/zodiac-animals
[issues-url]: https://github.com/kabeep/zodiac-animals/issues

[license-image]: https://img.shields.io/github/license/kabeep/zodiac-animals?color=slateblue
[license-url]: LICENSE

[en-us-url]: README.md
[zh-cn-url]: README.zh-CN.md

[lunar-date-fns-url]: https://github.com/kabeep/lunar-date-fns
[lunar-birthday-cli-url]: https://github.com/kabeep/lunar-birthday-cli
[credits-url]: https://github.com/davisnatalie/zodiacAnimals2
