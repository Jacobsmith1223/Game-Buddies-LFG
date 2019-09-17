import React, { Component } from 'react'
import axios from 'axios'
import{ Link } from 'react-router-dom'
import './Thread.css'

class Thread extends Component {
    constructor(){
        super()

        this.state ={
          posts:[],
          search:'',
          title:'',
          content:'',
        }
    }

    componentDidMount(){
        axios.get(`/api/posts/${this.props.match.params.threadsid}`)
        .then((res) => {
            this.setState({
                posts:res.data
            })
        })
    }
     newPost = () => {
        const {title,content} = this.state
        const body = {title,content}
        console.log(this.props.match.params.threadsid)
        axios.post(`/api/post/new/${this.props.match.params.threadsid}`,body)
        .then(() => {
            console.log('complete')
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    deletePost = (data) => {
        this.setState({
            posts:data
          })
    }

    render() {
        console.log(this.state)
        const mappedPosts = this.state.posts.map((e, i) => {
            return (<Link to={`/posts/${e.id}`}>
                <div className='thread-box'>
                <p className="game-title">{e.title}</p>
                <p className='content' >{e.content} </p> 
                
                
            </div>
                     </Link>)
        })
        
        return (
            <div className='posts'>
                <div className='post-box'>
                 <div>
                     <p>Post Title</p>
                    <input onChange = {e => this.setState({title: e.target.value})} />
                 </div>
                 <div>
                    <p>Post Content:</p>
                    <input onChange = {e => this.setState({content: e.target.value})} />
                 </div>
                 <button onClick={this.newPost}>Post</button>
                </div>
               {mappedPosts}
            </div>
        )
    }
}
export default Thread 