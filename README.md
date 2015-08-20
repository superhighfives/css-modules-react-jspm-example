# CSS Modules + React + JSPM

A working example of [CSS Modules][css-modules], [React][react] and [JSPM][jspm], based on Glen Madderns' [CSS Modules - The Future Is Here][css-modules-article].

## Getting started

- Install jspm (`npm install -g jspm`)
- Install jspm-server (`npm install -g jspm-server`)
- Run `npm install`
- Run `jspm install`

There are three methods for requiring CSS:
- Using `!` (which parses via `css.js`)
- Using `!css-global` (which parses via `jspm-loader-css`)
- Using `!css-modules` (which parses via `jspm-loader-css-modules`)

For example:

```js
import React from 'react'
import styles from './header.css!css-modules'

console.log(styles)

export default class Header extends React.Component {
  render() {
    return <div className={styles.header}>
      <pre><code>CSS Modules + React + JSPM</code></pre>
    </div>
  }
}
```

Will inject:

```css
._lib_components_header__header {
  height: 200px;
}
```

## Fire it up

Run `jspm-server src`.

  [css-modules]: http://github.com/css-modules/css-modules
  [css-modules-article]: http://glenmaddern.com/articles/css-modules
  [react]: http://github.com/css-modules/css-modules
  [jspm]: http://jspm.io