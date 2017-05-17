const React = require('react')
const store = require('./store')

function HomeButton(props) {
  const returnHome = function($event) {
    store.dispatch({ type: 'CHANGED_HOMEPAGE'})
  }
  return (
    <div id="homeButton">
      <button type="button" className="btn btn-primary home-button" onClick={returnHome}>back to main page</button>
    </div>
  )
}

module.exports = HomeButton
