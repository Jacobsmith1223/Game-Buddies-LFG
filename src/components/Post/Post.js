import React, { Component } from 'react'
import axios from 'axios'

export default class Post extends Component {
    constructor(){
        super()

        this.state = {
            title:'',
            content:'',

        }
    }
    render() {

        newPost = () => {
            const {game, image} = this.state
            const body = {game, image}
            axios.post('/api/thread/new',body).then(() => {
            }).catch((err) => {
                console.log(err)
            })
        }

        return (
            <div>
                 <button className="new-post">New Thread</button>
            </div>
        )
    }
}
