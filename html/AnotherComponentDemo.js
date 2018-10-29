import React from 'react'
import ReactDOM from 'react-dom'

import AnotherComponent from '../src/AnotherComponent.js'

const render = (options, target) => {
  ReactDOM.render(<AnotherComponent {...options} />, document.getElementById(target))
}

export { render }
