import React, { Component, Fragment } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

class Login extends Component {
  state = {
    msg: ''
  }

  logar(e) {
    event.preventDefault();
    console.log(this.props)
    this.props.validateUser({
      variables: { username: this.login },
      update: (proxy, { data: { validateUser } }) => {
        this.props.data.refetch();
      },
    })
    
  }

  render() {
    console.log(this.props)
    return (
      <Fragment>
        <h1>Login</h1>
        <div className="login-box">
          <h1 className="header-logo">Instagram</h1>
          <span>{this.state.msg}</span>
          <form onSubmit={this.logar.bind(this)}>
            <input type="text" ref={(input) => this.login = input} />
            <input type="password" ref={(input) => this.senha = input} />
            <input type="submit" value="login" />
          </form>
        </div>
      </Fragment>
    )
  }
}

const validateUser = gql`
  query ($username: String!) {
    User(username: $username) {
      id
      username
    }
  }  
`;

// #todo: \/ depois simplificar código abaixo.

// Create our enhancer function.
const withTodoAppQuery = graphql(validateUser, {
  options: {
    variables: {
      username: this.login,
    }
  }});

// Enhance our component.
const TodoAppWithData = withTodoAppQuery(Login);

// Export the enhanced component.
export default TodoAppWithData;