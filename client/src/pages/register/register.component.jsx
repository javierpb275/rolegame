import React from "react";
import { Link } from "react-router-dom";

// CSS
import "./register.css";
// Components
import RegisterClass from "../../components/register-class/register-class.component";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phase1: true
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitRegister = classtype => {
    fetch("http://localhost:3001/register", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        idclasstype: classtype
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
        }
      });
  };

  render() {
    const { phase1 } = this.state;
    return (
      <div>
        {phase1 ? (
          <div>
            <nav style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <p className="register-form f3 pa3 pointer">Sign In</p>
              </Link>
            </nav>
            <h1 className="register-title">REGISTER</h1>
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
              <main className="pa4 black-80">
                <div className="measure">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <div className="mt3">
                      <label className="register-form" htmlFor="name">
                        Username
                      </label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="text"
                        name="name"
                        id="name"
                        onChange={this.onNameChange}
                      />
                    </div>
                    <div className="mt3">
                      <label className="register-form" htmlFor="email-address">
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
                      <label className="register-form" htmlFor="password">
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
                    <input
                      onClick={() => this.setState({ phase1: false })}
                      className="register-form b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                      type="submit"
                      value="Register"
                    />
                  </div>
                </div>
              </main>
            </article>
          </div>
        ) : (
          <RegisterClass submitFunction={this.onSubmitRegister} />
        )}
      </div>
    );
  }
}

export default Register;
