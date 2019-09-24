import React, { Component } from 'react'
import axios from 'axios'
import io from 'socket.io-client'
import * as Icon from 'react-feather'
import './Post.css'

export default class Post extends Component {
    constructor(){
        super()

        this.state = {
            title:'',
            content:'',
            input:'',
            messages:[],
            room:'',
            joined:false

        }
    }
    componentDidMount() {
      this.setState({
          room:this.props.match.params.postsid
      })
      this.socket = io();
      this.socket.on('room joined', data => {
        this.joinSuccess(data)
      })
      this.socket.on('message dispatched', data => {
        console.log(data)
        this.updateMessages(data);
      })
    }

    componentWillUnmount() {
      this.socket.disconnect();
    }
    sendMessage = () => {
      this.socket.emit('message sent', {
        message: this.state.input,
        room: this.state.room
      })
      this.setState({
        input: ''
      })
    }
    updateMessages = (messages) => {
      this.setState({
        messages
      })
    }
    joinRoom = () => {
      this.socket.emit('join', {
        room: this.state.room
      })}
      joinSuccess = (messages) => {
        this.setState({
          joined: true,
          messages
        })
      }

    deletePost = () => {
        axios.delete(`/api/delete/post/${this.props.match.params.postsid}`).then(() => {
            this.props.history.push('/dashboard')
        })
     }

    
    render() {
      
        return (
          <div>
            <div className='body'>
             <div className='post-box'>
                <Icon.Delete className='delete' onClick={this.deletePost} />
             </div>
            </div>
            
           <div className="chatApp">
           {this.state.joined ? <h1>My Room: {this.state.room}</h1> : null}
           <div className='message'>
             {this.state.messages.map(messageObj => <h2 key={messageObj.id}>{messageObj.message}</h2>)}
           </div>
           {
             this.state.joined
               ?
               <div>
                 <input value={this.state.input} onChange={e => {
                   this.setState({
                     input: e.target.value
                   })
                 }} />
                 <button onClick={this.sendMessage}>Send</button>
               </div>
               :
               <div>
                 
                 <button onClick={this.joinRoom}>Join Chat</button>
               </div>
           }
         </div>
             </div>  
             
        )
    }
}
