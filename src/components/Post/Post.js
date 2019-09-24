import React, { Component } from 'react'
import axios from 'axios'
import io from 'socket.io-client'
import * as Icon from 'react-feather'
import {connect} from 'react-redux'
import './Post.css'

 class Post extends Component {
    constructor(){
        super()

        this.state = {
            title:'',
            content:'',
            input:'',
            messages:[],
            room:'',
            users_id:0,
            joined:false

        }
    }
    componentDidMount() {
      this.setState({
          room:this.props.match.params.postsid,
          users_id:this.props.id
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
        room: this.state.room,
        users_id: this.state.users_id
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
        <div className='chatBody'>
           <div className="chatApp">
             <div className='deleteGroup'>
             <h1>End Chat?</h1>
           <Icon.Delete className='delete' onClick={this.deletePost} />
           </div>
           {this.state.joined ? <h1 className='chatRoom'>Chat Room: {this.state.room}</h1> : null}
           <div className='message'>
             {this.state.messages.map(messageObj => <h2 className='messages' key={messageObj.id}>{messageObj.username}: {messageObj.message}</h2>)}
           </div>
           {
             this.state.joined
               ?
               <div>
                 <input className='chat-input' value={this.state.input} onChange={e => {
                   this.setState({
                     input: e.target.value
                   })
                 }} />
                 <button className='chat-btn' onClick={this.sendMessage}>Send</button>
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
function mapStateToProps(state){
  return{
      id: state.id
  }
}

export default connect(mapStateToProps)(Post)