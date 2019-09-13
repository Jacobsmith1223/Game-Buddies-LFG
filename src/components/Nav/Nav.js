import React, { Component } from 'react'
import axios from 'axios'
import './Nav.css'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

class Nav extends Component {
    logout = () => {
        axios.post('/auth/logout').then(() => {
            this.props.history.push('/')
            console.log('you have logged out')
        })
    }
    render() {
        return (
            <div className="nav-bar">
                <div className="profile-pic">
                    <img className="pic" alt ="profile pic"src={this.props.profile_pic}/>
                </div>
                <h1 className="user">{this.props.username}</h1>
                <div className='middle-block' >
                 <Link to ='/new/thread'>
                    <button className="new">New Thread</button>
                 </Link>
                 <Link to ="/dashboard" >
                    <button className="home" >Home</button>
                 </Link>
                 <Link to = '/settings'>
                    <button className="setting">Settings</button>
                 </Link>
                </div>
                <div className="bottom-section">
                    <Link exact to='/'>
                        <button className='block' onClick={this.logout}>Logout</button>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        username: state.username,
        profile_pic: state.profile_pic
    }
}

export default connect(mapStateToProps)(Nav)