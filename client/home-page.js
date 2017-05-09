// Homepage Component for Main Page //
const React = require('react')
const NavButtons = require('./nav-buttons')
const Description = require('./site-description')

function HomePage(props){
  return (
    <div>
      <div className="jumbotron container">
        <h1 className="display-3">We-Help</h1>
        <h3 className="lead">Connecting helpers to those in need.</h3>
      </div>
      <Description />
      <NavButtons />
    </div>
  )
}

module.exports = HomePage
