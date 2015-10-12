import React from 'react'
import styles from './header.css!css-modules'

export default class Header extends React.Component {
  render() {
    return <div className={styles.header}>
      <pre><code>CSS Modules + React + JSPM</code></pre>
    </div>
  }
}