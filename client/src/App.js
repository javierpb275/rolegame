import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//CSS:
import "./App.css";

//COMPONENTS:
import Signin from "./pages/signin/signin.component";
import Register from "./pages/register/register.component";
import Home from "./pages/home/home.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "/",
      user: {
        id_user: "",
        id_login: "",
        id_class_type: "",
        name: "",
        attack: "",
        hp: "",
        level: 1,
        experience: 0,
        joined: "",
        class_type_name: ""
      }
    };
  }

  loadUser = data => {
    this.setState({
      user: {
        id_user: data.id_user,
        id_login: data.id_login,
        id_class_type: data.id_class_type,
        name: data.name,
        attack: data.attack,
        hp: data.hp,
        level: data.level,
        experience: data.experience,
        joined: data.joined,
        class_type_name: data.class_type_name
      }
    });
  };


  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            component={ () => <Signin loadUser={this.loadUser} /> }
          />
          <Route
            exact
            path="/register"
            component={ () => <Register loadUser={this.loadUser} /> }
          />
          <Route 
          exact 
          path="/home" 
          component=
          { () => <Home name={this.state.user.name} 
          class_type_name={this.state.user.class_type_name}
          level={this.state.user.level} /> }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
