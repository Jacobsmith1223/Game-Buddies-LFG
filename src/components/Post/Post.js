import React, { Component } from 'react'


export default class Post extends Component {
    constructor(){
        super()

        this.state = {
            title:'',
            content:'',

        }
    }

    
    render() {
        return (
            <div>
                <p>Post</p> 
            </div>
        )
    }
}
