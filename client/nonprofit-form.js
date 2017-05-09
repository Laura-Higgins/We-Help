// Component for NonprofitForm //
const React = require('react')

function NonprofitForm(props) {
  return (
    <div className="col-sm-4 col-sm-offset-4 row" id="nonprofitForm">
      <div className="form-group">
        <label className="form-control-label" htmlFor="inputSuccess1">Organization Name</label>
        <input type="text" className="form-control" id="input1"/>
      </div>
      <div className="form-group">
        <label className="form-control-label" htmlFor="inputSuccess2">Location</label>
        <input type="text" className="form-control" id="input2"/>
      </div>
      <div className="form-group">
        <label className="form-control-label" htmlFor="inputSuccess3">Date</label>
        <input type="date" className="form-control" id="input3"/>
      </div>
      <div className="form-group">
        <label className="form-control-label" htmlFor="inputSuccess4">Phone Number</label>
        <input type="text" className="form-control" id="input4"/>
      </div>
      <div className="form-group">
        <label className="form-control-label" htmlFor="inputSuccess5">Email</label>
        <input type="email" className="form-control" id="input5"/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleSelect1"># of Volunteers Needed </label>
        <select className="form-control volunteerSelect" id="volunteerSelect">
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
        <textarea className="form-control" id="TextArea" rows="3"></textarea>
      </div>
      <button id="form-button" type="submit" className="btn btn-info">Get Help!</button>
    </div>
  )
}

module.exports = NonprofitForm
