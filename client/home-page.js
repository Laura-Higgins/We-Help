// Homepage Component for Main Page //
const React = require('react')
const NavButtons = require('./nav-buttons')
const Description = require('./site-description')

function HomePage(props){
  return (
    <div>
      <div className="jumbotron container">
        <h1 className="display-3">We-Help</h1>
        <p className="lead">Connecting helpers to those in need.</p>
      </div>
      <NavButtons />
      <Description />
    </div>
  )
}

module.exports = HomePage
