import React, { Component } from 'react'
import axios from 'axios'
import {slideNav} from '../../redux/reducer'
import burger from './Hamburgaler.svg'
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
    slideOut = () => {
        const { slide } = this.props
        this.props.slideNav(slide)
    }
    componentDidUpdate(prevProps){
        if(this.props.profile_pic !== prevProps.profile_pic){
            this.fetchData(this.props.profile_pic)
        }
    }
    render() {
        return (
            <div>
                <div className='hamburglar'>
                <img src = {burger} alt='menu' onClick={this.slideOut} className="burger-menu"/>
                </div>
            <div className={this.props.slide ? "no-slide" : "nav-bar"}>
                
                <div className="profile-pic">
                    <img className="pic" alt ="profile pic"src={this.props.profile_pic}/>
                </div>
                <h1 className="user">{this.props.username}</h1>
                <div className='middle-block' >
                 <Link to ='/new/thread'>
                    <button className="new">NEW THREAD</button>
                 </Link>
                 <Link to ="/dashboard" >
                    <button className="home" >HOME</button>
                 </Link>
                 <Link to = '/settings'>
                    <button className="setting">SETTINGS</button>
                 </Link>
                </div>
                <div className="bottom-section">
                    <Link exact to='/'>
                        <button className='block' onClick={this.logout}>LOGOUT</button>
                    </Link>
                </div>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        username: state.username,
        profile_pic: state.profile_pic,
        slide: state.slide
    }
}

export default connect(mapStateToProps,{slideNav})(Nav)