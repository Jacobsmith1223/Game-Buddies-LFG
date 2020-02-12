import React, { Component } from 'react'
import axios from 'axios'
import * as Icon from 'react-feather'
import './Landing.css'

import {connect} from 'react-redux'
import {addUser} from '../../redux/reducer'

class Landing extends Component {
    constructor(){
        super()

        this.state ={
            show: false,
            register: false,
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

    showModal = () => {
        this.setState({show:true})
    }

    showRegister = () => {
        this.setState({register:true})
    }

    hideModal = () => {
        this.setState({show: false})
    }

    hideRegister = () => {
        this.setState({register:false})
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
        return (
            <div>
                 <div className='desktop'>
                     <div className='header'>
                        <button type='button'
                                className='auth-btn'
                                onClick={this.showModal}>
                            Login
                        </button>
                     </div>
                     <div className = {this.state.show ? 'display-auth': 'dont-display' }>
                         <div className="login-container">
                            <Icon.X className='closer' onClick={this.hideModal}/>
                             <h1 className="title">Login</h1>
                       
                            <input name="username"
                                type="text"
                             placeholder="username"
                             className="auth-input"
                             value={this.state.username}
                             onChange={this.handleChange}
                                 />
                             <input name="password"
                                type="password"
                             placeholder="password"
                             className="auth-input"
                             value={this.state.password}
                             onChange={this.handleChange}
                             />
                            <div className="jeff">
                            <button className="btn" onClick ={this.login}>Login</button>
                         </div>
                         </div>
                         
                        
                     </div>
                     <div className = {this.state.register ? 'display-register': 'dont-display' }>
                        <div className="register-container">
                            <Icon.X className='closer' onClick={this.hideRegister}/>
                            <h1 className="title">Sign Up.</h1>
                        
                            <input className="auth-input" 
                                 type="text"
                                 placeholder="username" 
                                 name="username" 
                                 value={this.state.username}
                                 onChange={this.handleChange} />

                            <input className="auth-input"  
                                type="password"
                                 placeholder="password" 
                                 name="password" 
                                value={this.state.password}
                                onChange={this.handleChange} />

                            <div className="jeff">
                            <button onClick={this.register} className="btn" >Sign Up</button>
                             </div>
                        </div>
                        
                     </div>

                    

                     <div>
                         <h1 className='title-page'>Game Buddies</h1>
                     </div>

                     <div className='middle'>
                         <p className='middle-p'>Sign Up to begin LFG</p>
                         <button className='register-btn'
                                onClick={this.showRegister}>Register</button>                  
                     </div>

                     

                 </div>
                 <div className='bottom-desk'>
                     <div className='no-mans'>

                     </div>
                     <div>
                         <h1 className='main-tag'>LOOKING FOR A GAME? WE GOT YOU.</h1>
                         <div className='step-container'>
                             <div className='idk'>
                                <div className='nums'>1</div>
                                <div>
                                    <h1 className='steps'>Sign Up For Free</h1>
                                    <p className='p-tags'>Set up your Game Buddies profile and get started Looking For Groups in minutes</p>
                                </div>
                             </div>

                             <div className='idk'>
                                <div className='nums'>2</div>
                                <div>
                                    <h1 className='steps'>Join a Game</h1>
                                    <p className='p-tags'>Join the Thread for the game you're looking for </p>
                                </div>   
                             </div>

                             <div className='idk'>
                                <div className='nums'>3</div>
                                <div>
                                     <h1 className='steps'>Find Some Buddies</h1>
                                     <p className='p-tags'>Join up with others who are LFG, get out and Game!</p>
                                </div>
                                 
                             </div>
                         </div>
                     </div>

                 </div>
            </div>
        )
    }
}
export default connect(null,{addUser})(Landing);