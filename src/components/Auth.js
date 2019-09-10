import React, { Component } from 'react'

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
             if(this.state.error !== true)
             this.props.history.push('/dashboard')
         })
         .catch((error) => {
             this.setState({
                 error:true,
                 errorMessage: error.response.data
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
                {
                    this.state.error ?
                    (
                        <div className="error">
                            {this.state.errorMessage}
                        </div>
                    )
                    :
                    null
                }
                {
                    this.state.display ?
                    ( <div className={
                        this.state.error ?
                        "login-container shake"
                        :
                        "login-container"
                    }>
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
                <button onClick ={this.login}>Login</button>
                <button onClick={this.changeDisplay}>Register</button>
                </div>)
                :
                (<div>
                   
                <input className="login-input" 
                     type="text"
                     placeholder="username" 
                     name="username" 
                     value={this.state.username}
                     onChange={this.handleChange} />
                <input className="login-input"  
                     type="password"
                     placeholder="password" 
                    name="password" 
                    value={this.state.password}
                    onChange={this.handleChange} />
                <input className="login-input"  
                    type="text" 
                    placeholder="profile pic here" 
                    name="profile_pic" 
                    value={this.state.profile_pic}
                    onChange={this.handleChange}  />
                <button onClick={this.register} className="btn login" >Sign Up</button>
                <button onClick={this.changeDisplay} className="btn register">Cancel</button>
                    
                    </div>)
                }
            </div>
        )
    }
}

export default Auth 