// Component for Volunteers page //
const React = require('react')
const Events = require('./events')

function VolunteerPage(props) {
  return (
    <div>
      <div id="nav-logo">We-Help</div>
      <div className="eventsHeader">Be a Volunteer!</div>
      <div className="volunteers-question container">Who can volunteer?</div>
      <div className="volunteers-description container">Everyone! A volunteer is someone who has the time and ability to help out! We-Help's goal is to connect helpers with nonprofits in need.
      Donating time, supplies, or financial support benefits the whole community! Browse requests for help from local nonprofits below.</div>
      <div className="indicate-events container">Help Needed:</div>
      <Events {...props} />
    </div>
  )
}


module.exports = VolunteerPage
