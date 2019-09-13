import React, { Component } from 'react'
import axios from 'axios'
import './Form.css'

export default class Form extends Component {
    constructor(){
        super()

        this.state ={
            game:'',
            image:''
        }
    }

    newThread = () => {
        const {game, image} = this.state
        const body = {game, image}
        axios.post('/api/thread/new',body).then(() => {
            this.props.history.push('/dashboard')
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <div className='form-box'>
                 <div>
                     <p>Game Title</p>
                    <input onChange = {e => this.setState({game: e.target.value})} />
                 </div>
                 <div>
                    <p>Image URL:</p>
                    <input onChange = {e => this.setState({image: e.target.value})} />
                 </div>
                 <button onClick={this.newThread}>Post</button>
                </div>
            </div>
        )
    }
}
