// events Component //
const React = require('react')

function eventDate(date) {
  var myDate = new Date(date)
  return myDate.getMonth()+1 + "-" + myDate.getDay() + "-" + myDate.getFullYear()
}

function Events(props) {
  return (
    <div className="event-card">
      {props.events.map(function(event) {
        return (
          <div className="event-card container">
            <h1 id="card-title">{event.organization}</h1>
            <span id="event-date" className="time-date">{eventDate(event.date)} {event.time}</span>
            <h4 id="card-location">{event.location}</h4>
            <p className="event-description">{event.description}</p>
            <p className="event-volunteers">{event.organization} is requesting:</p><p className="event-volunteers">{event.volunteerCount} volunteers to help out.</p>
            <p className="event-contact-info">To commit to volunteering, or request more detailed information:</p>
            <p className="event-contact-info">Email: {event.email}</p>
            <p className="event-contact-info">Phone: {event.phoneNumber}</p>
            <button className="btn btn-primary">I'm Interested!</button>
          </div>
        )
      })}
    </div>
  )
}

module.exports = Events
