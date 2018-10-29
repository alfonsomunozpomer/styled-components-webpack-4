import React from 'react'
import ReactDOM from 'react-dom'

import MyComponent from '../src/MyComponent.js'

const render = (options, target) => {
  ReactDOM.render(<MyComponent {...options} />, document.getElementById(target))
}

export { render }
