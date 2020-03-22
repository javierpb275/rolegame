import React from "react";
import { Link } from "react-router-dom";
import "./signin.css";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: ""
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:3001/signin", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => {
        console.log(response);
         response.json()
      .then(user => {
        if (user.id_user) {
          this.props.loadUser(user);
        }
      })
    })
  };

  render() {
    const { } = this.props;
    return (
      <div>
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <p
              className="signin-form f3 pa3 pointer"
            >
              Register
            </p>
          </Link>
        </nav>
        <h1 className="app-title">ROLEGAME</h1>
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <div className="mt3">
                  <label className="signin-form" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="mv3">
                  <label className="signin-form" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
              </fieldset>
              <div className="">
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <input
                    onClick={this.onSubmitSignIn}
                    className="signin-form b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Sign in"
                  />
                </Link>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default Signin;
