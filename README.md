# Countries Flag

https://freeshineit.github.io/countries-flag

https://freeshineit.github.io/countries-flag/index-code.html

https://freeshineit.github.io/countries-flag/index-64.html

https://freeshineit.github.io/countries-flag/index-code-64.html
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
   /*  download image */
   background-image: url(./flags.png);
}
```

Sass

```scss
/* 32px */
@import 'countries-flag/index.scss';

/* 64px */
/* @import 'countries-flag/lib/flags-64.css' */

.flag {
   /*  download image */
   background-image: url(./flags.png);
}
```


Vue/React

```tsx
import bg from 'countries-flag/lib/flags.png'

// ...

<span className="flag flag-cn" style={{backgroundImage: `url(${bg})`}}></span>
```

HTML

```html
    <!-- China flag -->
    <span class='flag flag-cn'></span>
```