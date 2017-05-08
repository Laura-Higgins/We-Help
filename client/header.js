// Header Component for Main Page //
const React = require('react')
const NavButtons = require('./nav-buttons')
const Description = require('./site-description')

function Header(props){
  return (
    <div>
      <div className="jumbotron container">
        <h1 className="display-3">Get started helping!</h1>
        <p className="lead">We-Help connecting helpers to those in need.</p>
      </div>
      <NavButtons/>
      <Description/>
    </div>
  )
}

module.exports = Header
