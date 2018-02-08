import React, { Component, Fragment } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

export const LoginForm = (props) => (
  <Fragment>
    <h1>Login</h1>
    <div className="login-box">
      <h1 className="header-logo">Instagram</h1>
      <form>
        <input type="text" ref={(input) => this.login = input} placeholder="login" />
        <input type="password" ref={(input) => this.password = input} placeholder="password" />
        <input type="button" value="login" onClick={() => props.logar(this.login.value)} />
      </form>
    </div>
  </Fragment>
)

class LoginWithoutData extends Component {

  logar(username) {
    this.props.data.refetch({
      username: username
    }).then(data => console.log(data))
  }

  render() {
    return (
      <LoginForm logar={this.logar.bind(this)} />
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