# Neat Design

## ✨ Introduce

`@derbysoft/neat-design` is the shell of `antd`, which inherits all the functions of `antd` and realizes the
association with the internal design map.

## 📦 Install

Create a `.npmrc` file in the root directory of project,
and add a specific registry for the scope `@derbysoft`:

```
@derbysoft:registry=https://repo.dbaws.net/repository/derbysoft-npm-group/
```

Then you can install it:

```shell
npm i @derbysoft/neat-design
```

## 🖥 Peer Environment

```json
{
    "@emotion/eslint-plugin": ">=11.10.0",
    "@emotion/react": ">=11.10.6",
    "@emotion/styled": ">=11.10.6",
    "@types/react": ">=18.2.28",
    "antd": ">=5.0.0",
    "react": ">=17.0.0",
    "react-dom": ">=17.0.0"
}
```

## 🔧 Peer Debugging Config

The first step is to make the `Peer Project` responsive to package changes.
The following provides two scenarios for reference.

### webpack

> [Watch and WatchOptions](https://webpack.js.org/configuration/watch/)

### umijs mfsu

```typescript
{
    mfsu: {
        // ...
        exclude: ['@derbysoft/neat-design']
        // ...
    }
}
```

## 🐛 Debugging

```shell
# First install yalc globally.
npm i -g yalc
```

### Open this project in your IDE

```shell
# link as a local npm package & hot update
npm run dev

# close link
npm run rmlink
```

### Then open your Peer Project

```shell
# Then link '@derbysoft/neat-design' as a local package.
yalc link @derbysoft/neat-design
```

## 🚀 Publish

```shell
npm run do-publish
```

## 🌍 Internationalization

Dozens of languages are supported in antd, see [i18n](https://ant.design/docs/react/i18n-cn).

## 🤝 Contributing

Current members:

[liangxiaojun](mailto:liangxiaojun@derbysoft.net)

[peter rao](mailto:peter.rao@derbysoft.net)

We welcome all contributions.

Please join us.

Then You can submit any ideas as pull requests or as GitHub issues. If you'd like to improve code, check out
the `develop` branch and have a good time! :)

## 🚧 Development progress

Docs:
[Design](https://www.figma.com/file/h5q5qXtr0p1gbyueskC6kB/%F0%9F%9A%A7-Neat----V2.1.2-(Newest))
·
[Token](https://docs.google.com/spreadsheets/d/1m_NBJgFjDq7mGZp6xY90OTv04spIWd12CE_w7QwMXpw)
·
[Board](https://derbysoft-manage.monday.com/boards/5362953854/views/118263080)
