# Countries Flag

https://freeshineit.github.io/countries-flag

https://freeshineit.github.io/countries-flag/index-64.html
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
  /* react-scripts@5.x */
  background-image: url(countries-flag/lib/flags.png);
  /* background-image: url(countries-flag/lib/flags-64.png); */
}
```

Sass

```scss
/* 32px */
@import 'countries-flag/index.scss';

/* 64px */
/* @import 'countries-flag/lib/flags-64.css' */

.flag {

   // download image
   background-image: url(./flags.png);

  /*  
      react-scripts@5.x
      background-image: url(countries-flag/lib/flags.png);
  */
 
  /* background-image: url(countries-flag/lib/flags-64.png); */
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