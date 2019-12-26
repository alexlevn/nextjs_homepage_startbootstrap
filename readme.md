# Readme

Get the bootstrap theme at [Link](https://github.com/BlackrockDigital/startbootstrap-shop-homepage/blob/master/README.md)
Remove Delete unnecessary things, I will get the same like 'html_resourse' folder.

```bash
yarn add @zeit/next-css @zeit/next-sass node-sass
```

Create next.config.js

```js
const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = withCss(withSass());
```
