import React from 'react'
import Header from './components/Header'

import './global/index'

export default class App extends React.Component {
  render() {
    return <div>
      <Header />
      <pre><code>Hello world.</code></pre>
    </div>
  }
}