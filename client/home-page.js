// Homepage Component for Main Page //
const React = require('react')
const NavButtons = require('./nav-buttons')
const Description = require('./site-description')

function HomePage(props){
  return (
    <div>
      <div className="jumbotron container">
        <h1 className="home-logo">We-Help</h1>
        <h3 className="tagline">Connecting helpers to those in need.</h3>
      </div>
      <Description />
      <NavButtons />
    </div>
  )
}

module.exports = HomePage
