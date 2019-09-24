import React, { Component } from 'react'
import './Settings.css'
import axios from 'axios'
import {connect} from 'react-redux'

class Settings extends Component {
    constructor(){
        super()

        this.state = {
            profile_pic:''
        }
    }

    updateProfile = () => {
        const {profile_pic} = this.state
        const body = {profile_pic}
        axios.put(`/api/update/${this.props.id}`, body).then(()=>{
            this.props.history.push('/dashboard')
        })
    }
    

    render() {
        console.log(this.state)
        return (
            <div className='set-body'>
            <div className="settings-box">
                <input onChange={e => this.setState({profile_pic: e.target.value})} />
                <button className='set-btn' onClick={this.updateProfile}>Update Profile Pic</button>
            </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        id : state.id,
        profile_pic: state.profile_pic
    }
}

export default connect(mapStateToProps)(Settings)