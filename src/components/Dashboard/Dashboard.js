import React, { Component } from 'react'
import './Dashboard.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

 
 class Dashboard extends Component {
     constructor(){
         super()

         this.state={
             threads:[],
             search:'',
             menuOpen:false, 
         }
     }
     componentDidMount(){
        axios.get(`/api/thread`)
        .then((res) => {
            this.setState({
                threads:res.data
            })
        })
    }

    render() {
        const mappedThreads = this.state.threads.map((e, i) => {
            return (<Link to={`/threads/${e.id}`}>
                <div className='thread-box'>
                <p className="game-title">{e.game}</p>
                <img src={e.image} alt='thread-pic' className="thread-pic" />
                
                
            </div>
                     </Link>)
        })
        return (
            <div className='dash-body'>
                <div className="dash-head">
                        <h1 className="dash-title">Game Buddies</h1>
                </div>
                {mappedThreads}
            </div>
        )
    }
}



export default Dashboard