# Neat Design Token

## ✨ Introduce

`@derbysoft/neat-design-token` is a token library for `@derbysoft/neat-design` and other related pojects.

## 📦 Install

Create a `.npmrc` file in the root directory of project,
and add a specific registry for the scope `@derbysoft`:

```
@derbysoft:registry=https://repo.dbaws.net/repository/derbysoft-npm-group/
```

Then you can install it:

```shell
npm i @derbysoft/neat-design-token
```

## 📝 Usage

```typescript
import {
    /**
     * Ladder Color mapping data.
     * @type Record<string, string>
     */
    ladderColor,

    /**
     * PowerBlack Token mapping data.
     * @type Record<string, string>
     */
    PowerBlackToken,

    /**
     * The default token.
     * @type Record<string, string>
     */
    defaultToken,

    /**
     * Token meta info.
     * @type Record<string, Record<string, string>>
     */
    globalTokenMeta,

    /**
     * An utility to parse hex color value to rgb color value.
     * @type (hex: string) => [number, number, number]
     */
    hex2Rgb,

    /**
     * An utility to format rgba color value by hex color value and alpha.
     * @type (hex: string, alpha: number) => string
     */
    rgba,

    /**
     * The type of ladder color.
     */
    type LadderColor,

    /**
     * The type of alias token.
     */
    type AliasToken,

    /**
     * The type of token.
     */
    type Token,
} from '@derbysoft/neat-design-token';

// ...
```

## 📖 Reference

1. [Token](https://docs.google.com/spreadsheets/d/1m_NBJgFjDq7mGZp6xY90OTv04spIWd12CE_w7QwMXpw)
