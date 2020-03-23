import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//CSS:
import "./App.css";

//ASSETS:
/*
import warriorImg from "./assets/role-classes/warriorImg.PNG";
import rogueImg from "./assets/role-classes/rogueImg.PNG";
import wizardImg from "./assets/role-classes/wizardImg.PNG";
*/
//COMPONENTS:
import Signin from "./pages/signin/signin.component";
import Register from "./pages/register/register.component";
import Home from "./pages/home/home.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "/",
      player_img: "",
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
  /*
  getPlayerImage = () => {
    const { id_class_type } = this.state.user;
    if (id_class_type === 1) {
      return this.setState({player_img: warriorImage})
    } else if (id_class_type === 2) {
      return this.setState({player_img: rogueImage})
  } else if (id_class_type === 3) {
    return this.setState({player_img: wizardImage})
 }
}
*/
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Signin loadUser={this.loadUser} />}
          />
          <Route
            exact
            path="/register"
            component={() => <Register loadUser={this.loadUser} />}
          />
          <Route
            exact
            path="/home"
            component={() => (
              <Home
                name={this.state.user.name}
                class_type_name={this.state.user.class_type_name}
                level={this.state.user.level}
                player_img={this.state.player_img}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
