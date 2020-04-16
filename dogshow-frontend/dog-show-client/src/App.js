import React from 'react';
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Form from './Components/Form'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import {withRouter, Redirect} from 'react-router-dom'


class App extends React.Component {

  state = {
    user: {
      id: 0, 
      username: '',
      dogs: []
    }, 
      token: ''
  }

  handleLoginSubmit = (userInfo) => {
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then((resp) => {
        if (!resp.message) {
          alert("Login successful!")
          this.setState({
           user: resp.user, 
          token: resp.token}, 
           () => {
             this.props.history.push("/profile")
           })
        }
        else {
          alert(resp.message)
        }
      })
  }


  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted", userInfo)

    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then((resp) => {
        if (!resp.message) {
          alert("A New User Has Been Created")
          this.setState({
            user: resp.user,
            token: resp.token}, 
            () => {
              this.props.history.push("/profile")
            })
        }
        else {
          alert("Invalid Username")
        }
      })
    }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Log in to your account here" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Owner Registration" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  addOneDog = (newDog) => {
    let copy = [...this.state.user.dogs, newDog]

    this.setState({
      user: {
        ...this.state.user, 
        dogs: copy
      }
    })
  }


  renderProfile = (routerProps) => {
    if (this.state.token) {
      return <ProfileContainer user={this.state.user} token={this.state.token} addOneDog={this.addOneDog}/>
    } else {
      return <Redirect to="/login"/>
    }
  }

  render(){
    console.log(this.props);
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={ this.renderProfile } />
          <Route path="/" exact component={Home} />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }

}

export default withRouter(App)
