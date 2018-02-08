import React, { Component, Fragment } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

class LoginWithoutData extends Component {

  logar(e) {
    event.preventDefault();
    this.props.data.refetch({
      username: this.login.value
    }).then(data => console.log(data))
  }

  render() {
    console.log(this.props)
    return (
      <Fragment>
        <h1>Login</h1>
        <div className="login-box">
          <h1 className="header-logo">Instagram</h1>
          <form onSubmit={this.logar.bind(this)}>
            <input type="text" ref={(input) => this.login = input} placeholder="login" />
            <input type="password" ref={(input) => this.senha = input} placeholder="password" />
            <input type="button" value="login" onClick={this.logar.bind(this)} />
          </form>
        </div>
      </Fragment>
    )
  }
}

export const LOGIN_QUERY = gql`
  query ($username: String!) {
    User(username: $username) {
      id
      username
    }
  }  
`;

// #todo: \/ depois simplificar código abaixo.

// Create our enhancer function.
export const withValidateQuery = graphql(LOGIN_QUERY, {
  options: (props) => {
    return { variables: { username: "" } }
  }
});

// Enhance our component.
const Login = withValidateQuery(LoginWithoutData);

// Export the enhanced component.
export default Login;