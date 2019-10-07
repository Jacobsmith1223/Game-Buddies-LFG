import React, { Component } from 'react'
import axios from 'axios'
import './Auth.css'

import {connect} from 'react-redux'
import {addUser} from '../../redux/reducer'

 class Auth extends Component {
     constructor(){
         super()

         this.state={
             display:true,
             username:'',
             password:'',
             profile_pic:'',
             error:false,
             errorMessage:''
         }
     }
     

     changeDisplay = () => {
         this.setState({
             display:!this.state.display,
             username:'',
             password:'',
             profile_pic:'',
             error: false,
             errorMessage:''
         })
     }

     handleChange = (event) => {
         this.setState({
             [event.target.name]:event.target.value
         })
     }

     login= () => {
         const {username,password} = this.state;
         axios.post('/auth/login',{username,password})
         .then(res => {
             const {id,username,profile_pic} = res.data
             this.props.addUser(id,username,profile_pic)
             if(this.state.error !== true)
             this.props.history.push('/dashboard')
         })
         .catch((error) => {
             console.log(error)
             this.setState({
                 error:true,
                //  errorMessage: error.response.data
             })
             setTimeout(() => {this.setState({
                 error:false,
                 errorMessage:'',
             })},3000)
         })
     }


     register = () => {
         const {username, password, profile_pic} = this.state;

         axios.post('/auth/register', {username, password, profile_pic})
         .then(res => {
            const {id,username,profile_pic} = res.data
            this.props.addUser(id,username,profile_pic)
             if(this.state.error !== true)
             this.props.history.push('/dashboard')
         })
         .catch((error) => {
             this.setState({
                 error:true,
                 errorMessage:error.response.data
             })
             setTimeout(() => {this.setState({
                 error:false,
                 errorMessage:'',
             })},3000)
         })
     }
     
     

    render() {
        
        console.log(this.props)
        return (
            <div className="auth-page">
                
                
            </div>
        )
    }
}

export default connect(null,{addUser})(Auth);