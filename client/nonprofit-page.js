// componet for Nonpofit page //
const React = require('react')
const NonprofitForm = require('./nonprofit-form')
const Disclaimer = require('./nonprofit-disclaimer')
const Logo = require('./we-help-logo')
const HomeButton = require('./home-button')

function NonprofitPage() {
  return (
    <div>
      <HomeButton /> 
      <Logo />
      <div className="row" id="nonprofitHeader">
        <h1>My nonprofit needs help!</h1>
        <h3>I'm looking for people to donate their time to...</h3>
      </div>
      <NonprofitForm />
      <Disclaimer />
    </div>

  )
}

module.exports = NonprofitPage
