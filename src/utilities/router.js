import React from 'react'
import {Switch,Route} from 'react-router-dom'


import Auth from '../components/Auth/Auth'
import Dashboard from '../components/Dashboard/Dashboard'
import Thread from '../components/Threads/Thread'
import Form from '../components/Threads/Form/Form'
import Settings from '../components/Settings/Settings'
import Post from '../components/Post/Post'



export default (

    <Switch>
        <Route exact path = '/' component = {Auth} />
        <Route path = '/dashboard' component = {Dashboard} />
        <Route path ="/threads/:threadsid" component = {Thread} />
        <Route path = '/new/thread' component = {Form} />
        <Route path = '/settings' component = {Settings} />
        <Route path = '/posts/:postsid' component = {Post} />
       
    </Switch>
)