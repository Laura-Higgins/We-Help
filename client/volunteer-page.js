// Component for Volunteers page //
const React = require('react')
const Events = require('./events')
const HomeButton = require('./home-button')

function VolunteerPage(props) {
  return (
    <div>
      <div id="nav-logo">We-Help</div>
      <div className="eventsHeader">Be a Volunteer!</div>
      <div className="volunteers-question container">Who can volunteer?</div>
      <div className="volunteers-description container">Everyone! A volunteer is someone who has the time and ability to help out! We-Help's goal is to connect helpers with nonprofits in need.
      Donating time, supplies, or financial support benefits the whole community! Browse requests for help from local nonprofits below.</div>
      <div className="indicate-events container">Upcoming Events:</div>
      <Events {...props} />
      <div className="end-page">No more events!<HomeButton /></div>
    </div>
  )
}


module.exports = VolunteerPage
