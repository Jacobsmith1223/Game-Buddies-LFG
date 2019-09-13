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
        }
    }

    componentDidMount(){
        axios.get(`/api/post`)
        .then((res) => {
            this.setState({
                posts:res.data
            })
        })
    }

    render() {
        const mappedPosts = this.state.posts.map((e, i) => {
            return (<Link to={`/posts/${e.id}`}>
                <div className='thread-box'>
                <p className="game-title">{e.title}</p>
                <img src={e.image} alt='thread-pic' className="thread-pic" />
                
                
            </div>
                     </Link>)
        })
        
        return (
            <div>
               {mappedPosts}
            </div>
        )
    }
}
export default Thread 