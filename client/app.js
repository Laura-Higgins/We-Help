const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const HomePage = require('./home-page')
const NonprofitPage = require('./nonprofit-page')
const VolunteerPage = require('./volunteer-page')

function App(props) {
  switch (props.views.currentView) {
    case 1:
      return (
        <HomePage {...props} />
      )
      case 2:
        return (
          <NonprofitPage {...props} />
        )
      case 3:
        return (
          <VolunteerPage {...props} />
        )
    default:
      return (
        <HomePage {...props} />
      )
  }
}

module.exports = App
