// events Component //
const React = require('react')

function eventDate(date) {
  var myDate = new Date(date)
  return myDate.getMonth()+1 + "-" + myDate.getDay() + "-" + myDate.getFullYear()
}

function updateCount(event) {
  if (!event.interestCount) {
    event.interestCount = 0;
  }
  fetch('/events/'+ event._id, {
    method: 'PUT',
    body: JSON.stringify({ interestCount: event.interestCount + 1 }),
    headers:  {
      'Content-Type': 'application/json'
    }
  })
  .then(function() {
    fetch('/events', {
      method: 'GET'
    }).then(function(data) {
      return data.json()
    })
    .then(function(data) {
      store.dispatch({ type: 'EVENTS_LOADED', data })
    })
  })
}

function Events(props) {
  return (
    <div className="event-card">
      {props.events.map(function(event) {
        return (
          <div className="event-card container" key={event._id}>
            <h1 className="card-title">{event.organization}</h1>
            <div className="interest-count">{event.interestCount} People are interested in attending.</div>
            <div className="time-date"> {eventDate(event.date)} {event.time}</div>
            <h4 className="event-location">{event.location}</h4>
            <p className="event-description">{event.description}</p>
            <p className="event-volunteers">{event.organization} is requesting:</p><p className="event-volunteers">{event.volunteerCount} volunteers to help out.</p>
            <p className="event-contact-info">To commit to volunteering, or request more detailed information:</p>
            <p className="event-contact-info">Email: {event.email}</p>
            <p className="event-contact-info">Phone: {event.phoneNumber}</p>
            <button type="button" className="btn btn-success count-btn" onClick={() => updateCount(event)}>I'm Interested!</button>
          </div>
        )
      })}
    </div>
  )
}

module.exports = Events
