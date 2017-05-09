const React = require('react')
const store = require('./store')

function HomeButton(props) {
  const returnHome = function($event) {
    store.dispatch({ type: 'CHANGED_HOMEPAGE'})
    console.log('clicked!')
  }
  return (
    <div>
      <button type="button" className="btn btn-secondary" id="homeButton" onClick={returnHome}>back to main page</button>
    </div>
  )
}

module.exports = HomeButton
