import { Switch, Route, Redirect} from 'react-router-dom'
import React, { useContext } from 'react'

import LandingPage from './pages/LandingPage'
import Signin from './pages/login/signin'
import Signup from './pages/login/signup'
import Dashboard from './pages/dashboard'
import AddInstituition from './pages/register/instituition'
import AddAnimal from './pages/register/animal'

import { Context } from './context/AuthContext'


function PrivateRoute ( isPrivate, ...rest){
    const { authenticated } = useContext(Context)
    if (isPrivate && !authenticated){
        return <Redirect to="/"/>
    }
    return <Route {...rest} />
}


export default function Routes() {
    return(

            <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/add-instituition" exact component={AddInstituition}/>
                <Route path="/add-animal" exact component={AddAnimal}/>
                <Route path="/dashboard" exact component={Dashboard}/>                
            </Switch>

    )
}