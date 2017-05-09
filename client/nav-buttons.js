// Nav Button Component //
const store = require('./store')
const React = require('react')

function NavButtons(props) {
  const handleNonprofitChange = function($event) {
    store.dispatch({ type: 'CHANGED_NONPROFIT' })
    console.log('clicked!')
  }
  const handleVolunteerChange = function($event) {
    store.dispatch({ type: 'CHANGED_VOLUNTEER' })
    console.log('clicked!')
  }
  return (
    <div id="navButtons">
      <button type="button" className="btn btn-info btn-lg" id="nonprofitButton" onClick={handleNonprofitChange}>I'm a Nonprofit</button>
      <button type="button" className="btn btn-info btn-lg" onClick={handleVolunteerChange}>I'm a Volunteer</button>
    </div>
  )
}

module.exports = NavButtons
