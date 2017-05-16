// Nav Button Component //
const store = require('./store')
const React = require('react')

function NavButtons(props) {
  const handleNonprofitChange = function($event) {
    store.dispatch({ type: 'CHANGED_NONPROFIT' })
  }
  const handleVolunteerChange = function($event) {
    fetch('/events', {
      method: 'GET'
    }).then(function(response) {
      return response.json()
    })
    .then(function(data) {
      store.dispatch({ type: 'EVENTS_LOADED', data})
      store.dispatch({ type: 'CHANGED_VOLUNTEER' })
    })
  }
  return (
    <div id="navButtons">
      <h1 id="navButtons-header">let's get started!</h1>
      <button type="button" className="btn btn-primary btn-lg" id="nonprofitButton" onClick={handleNonprofitChange}>I'm a Nonprofit</button>
      <button type="button" className="btn btn-primary btn-lg" onClick={handleVolunteerChange}>I'm a Volunteer</button>
    </div>
  )
}

module.exports = NavButtons
