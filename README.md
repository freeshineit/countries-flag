# Countries Flag

![build](https://github.com/freeshineit/countries-flag/workflows/Build/badge.svg)
![Download](https://img.shields.io/npm/dm/countries-flag.svg)
![Version](https://img.shields.io/npm/v/countries-flag.svg)
![License](https://img.shields.io/npm/l/countries-flag.svg)

全球各国国旗，支持[国家电话区号](https://zh.wikipedia.org/wiki/%E5%9B%BD%E9%99%85%E7%94%B5%E8%AF%9D%E5%8C%BA%E5%8F%B7%E5%88%97%E8%A1%A8)和[ISO 3166-1](https://zh.wikipedia.org/zh-hans/%E5%9C%8B%E5%AE%B6%E5%9C%B0%E5%8D%80%E4%BB%A3%E7%A2%BC)


https://freeshineit.github.io/countries-flag

https://freeshineit.github.io/countries-flag/index-code.html

https://freeshineit.github.io/countries-flag/index-64.html

https://freeshineit.github.io/countries-flag/index-code-64.html

[demo](./docs/index.html)

![demo](demo.png)
## Install

With NPM

> npm install countries-flag

With Yarn

> yarn install countries-flag

## Use

CSS

```css
/* 32px */
@import 'countries-flag';

/* 64px */
/* @import 'countries-flag/lib/flags-64.css' */

.flag {
   /* webpack */
  background-image: url(~countries-flag/lib/flags.png);
   /* background-image: url(~countries-flag/lib/flags-64.png); */
}
```

Sass

```scss
/* 32px */
@import 'countries-flag/index.scss';

/* 64px */
/* @import 'countries-flag/lib/flags-64.scss' */

.flag {
   /*  webpack */
   background-image: url(~countries-flag/lib/flags.png);
   // background-image: url(~countries-flag/lib/flags-64.png);
}
```


HTML

```html
    <!-- China flag -->
    <span class='flag flag-cn'></span>

   <!-- support phone code -->
   <!-- @import 'countries-flag/lib/flags-iso-code.css' or @import 'countries-flag/lib/flags-code.css'-->
    <span class='flag flag-86'></span>
```