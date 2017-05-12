// Component for nonprofit disclaimer //
const React = require('react')
const HomeButton = require('./home-button')

function Disclaimer() {
  return (
    <div className="col-sm-12" id="disclaimer1">
      <div id="disclaimer">
        <small>Disclaimer</small>
      </div>
      <div id="disclaimer-text">
      <small className="text-muted">We-Help does not gaurantee the amount or quality of volunteers marketed to. Please be sure
        to screen all volunteers per your organizations qualifications.</small>
      </div>
    </div>
  )
}

module.exports = Disclaimer
