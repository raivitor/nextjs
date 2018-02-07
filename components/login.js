import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

class Login extends Component {
  state = {
    msg: ''
  }

  logar(e) {
    event.preventDefault();
    console.log('logar')
  }

  addTodo = () => {
    this.props.validateUser({
      variables: { username: this.login },
      update: (proxy, { data: { validateUser } }) => {
        this.props.data.refetch();
      },
    })
    this.setState({ todoText: '' })
  };


  render() {
    return (
      <Layout>
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
      </Layout>
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
const withTodoAppQuery = graphql(validateUser);

// Enhance our component.
const TodoAppWithData = withTodoAppQuery(Login);

// Export the enhanced component.
export default TodoAppWithData;