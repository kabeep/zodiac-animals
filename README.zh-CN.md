<div align="center">

<h1>lunar-date-fns</h1>

🐼 一个 JavaScript 生肖实用程序库

[![NodeJS][node-image]][node-url]
[![License][license-image]][license-url]
[![NPM][npm-image]][npm-url]
[![Codecov][codecov-image]][codecov-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![CircleCI][circleci-image]][circleci-url]

[English][en-us-url] | 简体中文

![Insights][insights-url]

</div>

## 📖 简介

> 考虑到树摇和文化差异所需的严谨性，不会输出国际化内容。

一个使用农历轻量且零依赖的生肖实用程序库。

查看[文档][docs-url]。

## ⚙️ 安装

```bash
npm install @kabeep/zodiac-animals --save
```

```bash
yarn add @kabeep/zodiac-animals
```

```bash
pnpm add @kabeep/zodiac-animals
```

## 🚀 使用

#### CommonJS

```typescript
const { ANIMALS, zodiac, Zodiac } = require('@kabeep/zodiac-animals');
```

#### ESModule

```typescript
import { ANIMALS, zodiac, type Zodiac } from '@kabeep/zodiac-animals';
```

---

#### 函数: `zodiac(date)`

```typescript
zodiac(new Date()) as Zodiac;
```

| 参数     | 类型     | 可选 | 默认值 | 描述     |
|--------|--------|:--:|-----|--------|
| `date` | `Date` | No | -   | 公历日期对象 |

#### 返回: `interface Zodiac`

**Result Object:**

| 属性            | 类型         |    必选     | 描述                                   |
|---------------|------------|:---------:|--------------------------------------|
| `name`        | `string`   |   true    | 生肖名称                                 |
| `mate`        | `string[]` |   true    | 生肖配对                                 |
| `traits`      | `string[]` |   true    | 生肖特征                                 |
| `alias`       | `string`   | **false** | 生肖别名（文化差异）                           |
| `year`        | `number`   |   true    | 输入日期的农历年                             |
| `month`       | `number`   |   true    | 输入日期的农历月                             |
| `day`         | `number`   |   true    | 输入日期的农历日                             |
| `isLeapMonth` | `boolean`  |   true    | 输入日期是否是闰月                            |
| `from`        | `Date`     |   true    | 农历年第一天的公历日期（发生错误时返回一个 Invalid Date）  |
| `to`          | `Date`     |   true    | 农历年最后一天的公历日期（发生错误时返回一个 Invalid Date） |

## 🔗 关联库

- [lunar-date-fns][lunar-date-fns-url] - 🗓️ 一个 JavaScript 农历日期的实用程序库。
- [lunar-birthday-cli][lunar-birthday-cli-url] - 🎂 在终端中列出农历诞辰的 Node.js 库。

## 🏅 致谢

- [zodiacAnimals2][credits-url] - 参考了这个存储库的数据设计。

## 🤝 贡献

欢迎通过 Pull Requests 或 [Issues](https://github.com/kabeep/lunar-date-fns/issues) 来贡献你的想法和代码。

## 📄 许可

本项目采用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。


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

