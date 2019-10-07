import React from 'react'
import {Switch,Route} from 'react-router-dom'



import Dashboard from '../components/Dashboard/Dashboard'
import Thread from '../components/Threads/Thread'
import Form from '../components/Threads/Form/Form'
import Settings from '../components/Settings/Settings'
import Post from '../components/Post/Post'
import Landing from '../components/Landing/Landing'



export default (

    <Switch>
        <Route exact path = '/' component = {Landing} />
        <Route path = '/dashboard' component = {Dashboard} />
        <Route path ="/threads/:threadsid" component = {Thread} />
        <Route path = '/new/thread' component = {Form} />
        <Route path = '/settings' component = {Settings} />
        <Route path = '/posts/:postsid' component = {Post} />
       
    </Switch>
)