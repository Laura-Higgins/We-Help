const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const Header = require('./header')


// render to DOM with ReactDOM //
const renderStore = function() {
  const state = store.getState()
  const $Header = React.createElement(Header, state)
  const $app = document.querySelector('#app')

  ReactDOM.render($Header, $app)
}

renderStore()
store.subscribe(renderStore)
