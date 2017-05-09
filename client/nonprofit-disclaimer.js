// Component for nonprofit disclaimer //
const React = require('react')

function Disclaimer() {
  return (
    <div className="col-sm-12" id="disclaimer">
      <div>
        <small>Disclaimer</small>
      </div>
      <small className="text-muted">We-Help does not gaurantee the amount or quality of volunteers marketed to. Please be sure
      to screen all volunteers per your organizations qualifications.</small>
    </div>
  )
}

module.exports = Disclaimer
