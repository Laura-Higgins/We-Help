// Component for NonprofitForm //
const React = require('react')
const store = require('./store')


function NonprofitForm(props) {
  const inputUpdated = function($event) {
    let field = {}
    field[$event.target.name] = $event.target.value
    store.dispatch({ type: 'INPUT_UPDATED', field})
  }

  const handleSubmit = function($event) {
    $event.preventDefault()
    fetch('/events', {
      method: 'POST',
      body: JSON.stringify(store.getState().formReducer),
      headers:  {
        'Content-Type': 'application/json'
      }
    }).then(function() {
      store.dispatch({ type: 'CHANGED_HOMEPAGE' })
      store.dispatch({ type: 'CLEARED'})
    })
  }



  return (
    <div className="col-sm-4 col-sm-offset-4 row" id="nonprofitForm">
      <div className="form-group">
        <label className="form-control-label" htmlFor="inputSuccess1">Organization Name</label>
        <input type="text" onChange={inputUpdated} name="organization" className="form-control" id="input1"/>
      </div>
      <div className="form-group">
        <label className="form-control-label" htmlFor="inputSuccess2">Location</label>
        <input type="text" onChange={inputUpdated} name="location" className="form-control" id="input2"/>
      </div>
      <div className="form-group">
        <label className="form-control-label" htmlFor="inputSuccess3">Date</label>
        <input type="date" onChange={inputUpdated} name="date" className="form-control" id="input3"/>
      </div>
      <div className="form-group">
        <label className="form-control-label" htmlFor="inputSuccess4">Time</label>
        <input type="text" onChange={inputUpdated} name="time" className="form-control" id="input4"/>
      </div>
      <div className="form-group">
        <label className="form-control-label" htmlFor="inputSuccess5">Phone Number</label>
        <input type="text" onChange={inputUpdated} name="phoneNumber" className="form-control" id="input4"/>
      </div>
      <div className="form-group">
        <label className="form-control-label" htmlFor="inputSuccess6">Email</label>
        <input type="email" onChange={inputUpdated} name="email" className="form-control" id="input5"/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleSelect1"># of Volunteers Needed </label>
        <select onChange={inputUpdated} name="volunteerCount" className="form-control" id="volunteerSelect">
          <option>select</option>
          <option>1-5</option>
          <option>5-10</option>
          <option>10-15</option>
          <option>15-20</option>
          <option>20-25</option>
          <option>25+</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleTextarea">Description of volunteer opportunity </label>
        <small className="text-muted"> Be specific</small>
        <textarea onChange={inputUpdated} name="description" className="form-control" id="TextArea" rows="3"></textarea>
      </div>
      <button id="form-button" type="submit" onClick={handleSubmit} className="btn btn-primary btn-lg">Get Help!</button>
    </div>
  )
}

module.exports = NonprofitForm
