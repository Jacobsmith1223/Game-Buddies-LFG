import React, { Component } from 'react'
import Nav from './components/Nav/Nav'
import router from './utilities/router'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import 'reset-css'

 class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    console.log(this.props)
    return (
      <div>
        { this.props.location.pathname === '/' ?
        null
        :
        <Nav />
        }
      
      <div>
        {router}
      </div>
      </div>
    )
  }
}
export default withRouter(App)