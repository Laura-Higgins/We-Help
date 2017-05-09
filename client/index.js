const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const App = require('./app')



// render to DOM with ReactDOM //
const renderStore = function() {
  const state = store.getState()
  const $App = React.createElement(App, state)
  const $dom = document.querySelector('#app')

  ReactDOM.render($App, $dom)
}

renderStore()
store.subscribe(renderStore)
